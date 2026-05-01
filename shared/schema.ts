import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, boolean, integer, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  orgName: text("org_name").notNull(),
  userName: text("user_name").notNull(),
  email: text("email").notNull(),
  hasDomain: text("has_domain"),
  domainName: text("domain_name"),
  subdomain: text("subdomain"),
  noDomainPrefix: text("no_domain_prefix"),
  primaryColor: text("primary_color"),
  secondaryColor: text("secondary_color"),
  platformUrl: text("platform_url"),
  adminUrl: text("admin_url"),
  subscriptionId: integer("subscription_id"),
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  isRead: true,
  createdAt: true,
  subscriptionId: true,
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  isDefault: boolean("is_default").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriptionSchema = createInsertSchema(subscriptions).omit({
  id: true,
  createdAt: true,
});

export type InsertSubscription = z.infer<typeof insertSubscriptionSchema>;
export type Subscription = typeof subscriptions.$inferSelect;

export const subscriptionItems = pgTable("subscription_items", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
});

export const insertSubscriptionItemSchema = createInsertSchema(subscriptionItems).omit({
  id: true,
});

export type InsertSubscriptionItem = z.infer<typeof insertSubscriptionItemSchema>;
export type SubscriptionItem = typeof subscriptionItems.$inferSelect;

export const subscriptionPlanItems = pgTable("subscription_plan_items", {
  subscriptionId: integer("subscription_id").notNull().references(() => subscriptions.id, { onDelete: "cascade" }),
  subscriptionItemId: integer("subscription_item_id").notNull().references(() => subscriptionItems.id, { onDelete: "cascade" }),
}, (table) => ({
  pk: primaryKey({ columns: [table.subscriptionId, table.subscriptionItemId] }),
}));

export type SubscriptionPlanItem = typeof subscriptionPlanItems.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  organisation: text("organisation"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  mobile: text("mobile"),
  notes: text("notes"),
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  isRead: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
