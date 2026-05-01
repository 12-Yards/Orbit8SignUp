import {
  type User, type InsertUser,
  type Registration, type InsertRegistration,
  type ContactSubmission, type InsertContact,
  type Subscription, type SubscriptionItem,
  users, registrations, contactSubmissions,
  subscriptions, subscriptionItems, subscriptionPlanItems,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, or } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(reg: InsertRegistration): Promise<Registration>;
  getRegistrations(): Promise<Registration[]>;
  getRegistration(id: number): Promise<Registration | undefined>;
  updateRegistration(id: number, data: Partial<InsertRegistration>): Promise<Registration | undefined>;
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  getContacts(): Promise<ContactSubmission[]>;
  getContact(id: number): Promise<ContactSubmission | undefined>;
  checkDomainExists(domainName: string): Promise<boolean>;
  checkEmailExists(email: string): Promise<boolean>;
  deleteRegistration(id: number): Promise<boolean>;
  markRegistrationRead(id: number): Promise<Registration | undefined>;
  markContactRead(id: number): Promise<ContactSubmission | undefined>;
  getDefaultSubscription(): Promise<Subscription | undefined>;
  getSubscriptions(): Promise<Subscription[]>;
  getSubscriptionItems(): Promise<SubscriptionItem[]>;
  getSubscriptionItemsForPlan(subscriptionId: number): Promise<SubscriptionItem[]>;
  ensureDefaultSubscription(): Promise<Subscription>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createRegistration(reg: InsertRegistration): Promise<Registration> {
    let subscriptionId: number | null = null;
    try {
      const defaultSub = await this.getDefaultSubscription();
      subscriptionId = defaultSub?.id ?? null;
    } catch (err) {
      console.error("[createRegistration] Could not load default subscription:", (err as Error).message);
    }
    try {
      const [result] = await db.insert(registrations).values({
        ...reg,
        subscriptionId,
      }).returning();
      return result;
    } catch (err) {
      const [result] = await db.insert(registrations).values(reg).returning();
      return result;
    }
  }

  async getRegistrations(): Promise<Registration[]> {
    return db.select().from(registrations).orderBy(desc(registrations.createdAt));
  }

  async getRegistration(id: number): Promise<Registration | undefined> {
    const [result] = await db.select().from(registrations).where(eq(registrations.id, id));
    return result;
  }

  async updateRegistration(id: number, data: Partial<InsertRegistration>): Promise<Registration | undefined> {
    const [result] = await db.update(registrations).set(data).where(eq(registrations.id, id)).returning();
    return result;
  }

  async createContact(contact: InsertContact): Promise<ContactSubmission> {
    const [result] = await db.insert(contactSubmissions).values(contact).returning();
    return result;
  }

  async getContacts(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async getContact(id: number): Promise<ContactSubmission | undefined> {
    const [result] = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return result;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const results = await db.select().from(registrations).where(eq(registrations.email, email));
    return results.length > 0;
  }

  async checkDomainExists(domainName: string): Promise<boolean> {
    const results = await db.select().from(registrations).where(
      or(
        eq(registrations.domainName, domainName),
        eq(registrations.noDomainPrefix, domainName)
      )
    );
    return results.length > 0;
  }

  async deleteRegistration(id: number): Promise<boolean> {
    const result = await db.delete(registrations).where(eq(registrations.id, id)).returning();
    return result.length > 0;
  }

  async markRegistrationRead(id: number): Promise<Registration | undefined> {
    const [result] = await db.update(registrations).set({ isRead: true }).where(eq(registrations.id, id)).returning();
    return result;
  }

  async markContactRead(id: number): Promise<ContactSubmission | undefined> {
    const [result] = await db.update(contactSubmissions).set({ isRead: true }).where(eq(contactSubmissions.id, id)).returning();
    return result;
  }

  async getDefaultSubscription(): Promise<Subscription | undefined> {
    const [result] = await db.select().from(subscriptions).where(eq(subscriptions.isDefault, true));
    return result;
  }

  async getSubscriptions(): Promise<Subscription[]> {
    return db.select().from(subscriptions).orderBy(desc(subscriptions.isDefault), subscriptions.name);
  }

  async getSubscriptionItems(): Promise<SubscriptionItem[]> {
    return db.select().from(subscriptionItems).orderBy(subscriptionItems.name);
  }

  async getSubscriptionItemsForPlan(subscriptionId: number): Promise<SubscriptionItem[]> {
    const rows = await db
      .select({ item: subscriptionItems })
      .from(subscriptionPlanItems)
      .innerJoin(subscriptionItems, eq(subscriptionItems.id, subscriptionPlanItems.subscriptionItemId))
      .where(eq(subscriptionPlanItems.subscriptionId, subscriptionId));
    return rows.map((r) => r.item);
  }

  async ensureDefaultSubscription(): Promise<Subscription> {
    const seedItems: { key: string; name: string; description: string }[] = [
      { key: "events-standard", name: "Events (Standard)", description: "Standard events functionality." },
      { key: "events-competitions", name: "Events (Competitions)", description: "Competition events functionality." },
      { key: "add-reviews", name: "Add Reviews", description: "Allow members to add reviews." },
      { key: "communities", name: "Communities", description: "Community groups functionality." },
      { key: "connections", name: "Connections", description: "Member-to-member connections." },
      { key: "play", name: "Play", description: "Play functionality." },
      { key: "play-add-request", name: "Play (Add Request)", description: "Allow members to add play requests." },
      { key: "suggest-event", name: "Suggest Event", description: "Allow members to suggest events." },
    ];

    for (const seed of seedItems) {
      const [existing] = await db.select().from(subscriptionItems).where(eq(subscriptionItems.key, seed.key));
      if (!existing) {
        await db.insert(subscriptionItems).values(seed);
      }
    }

    let [defaultSub] = await db.select().from(subscriptions).where(eq(subscriptions.isDefault, true));
    if (!defaultSub) {
      const [created] = await db.insert(subscriptions).values({ name: "Default", isDefault: true }).returning();
      defaultSub = created;
    }

    const allItems = await db.select().from(subscriptionItems);
    const existingLinks = await db
      .select()
      .from(subscriptionPlanItems)
      .where(eq(subscriptionPlanItems.subscriptionId, defaultSub.id));
    const linkedIds = new Set(existingLinks.map((l) => l.subscriptionItemId));
    const toAdd = allItems
      .filter((item) => !linkedIds.has(item.id))
      .map((item) => ({ subscriptionId: defaultSub.id, subscriptionItemId: item.id }));
    if (toAdd.length > 0) {
      await db.insert(subscriptionPlanItems).values(toAdd);
    }

    return defaultSub;
  }
}

export const storage = new DatabaseStorage();
