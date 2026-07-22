# Tribal18

## Overview

Tribal18 (formerly Orbit8) is a community management platform designed for clubs and communities. This is the marketing website for the Tribal18 SaaS platform. The application enables management of members, events, competitions, content, and reciprocal play arrangements.

## Recent Changes

- **July 2026**: Added "Search and connect with other golfers" to the Professional plan's feature list in the pricing section
- **July 2026**: Added a highlighted line under the pricing section description: "Free for first 30 days, no card details needed to go live." (emerald green text)
- **July 2026**: Moved "Content publishing" from the Professional plan's feature list to the free Starter plan in the pricing section
- **July 2026**: Changed the "Free Trial Available" checklist item in the features section to "Go Live For Free" (title case)
- **July 2026**: Changed the features section subheading from "Everything your administrators need to grow, engage and manage your community" to "A platform that carries your brand, run by your own team, built around your members", then to "One platform. Every tool your community needs."
- **July 2026**: Changed the features section heading from "Your community, your brand, your platform" to "Own the Experience. Build the Community."
- **July 2026**: Changed the features section badge from "Community Platform" (globe icon) to "Fully Branded & Customisable" (palette icon) to match the section's branding-focused content
- **July 2026**: Adjusted the features section headings to fit the new description: heading changed from "Build a thriving online community" to "Your community, your brand, your platform" and subheading from "Everything You Need to Grow, Engage, and Manage Your Community" to "Everything your administrators need to grow, engage and manage your community"
- **July 2026**: Changed the "Build a thriving online community" section description to "Fully branded, fully customisable and managed by your own administrators, Tribal18 provides all the tools to grow and run your community from a single platform." (replacing the previous societies/content-creators copy)
- **July 2026**: Replaced the hero description paragraph with new golf-focused copy: "Build a thriving golfing community with Tribal18. Our web and mobile platform gives clubs, societies and golf communities everything they need to manage members, organise competitions and events, connect golfers, arrange games and keep members engaged." (the "Fully branded, fully customisable..." final sentence was subsequently removed)
- **July 2026**: Changed hero heading to "Built to Help Your Golf Community Flourish" (added "Golf"; "Golf Community" in sky blue, "Flourish" in emerald green)
- **July 2026**: Changed "View Platform" link URL from https://tribal18.golf to https://tribal18.com (hero and pricing/CTA sections)
- **July 2026**: Replaced the hero dashboard mockup (coded admin dashboard preview) with an attached image of four Tribal18 mobile app screens (updated to attached_assets/image_1784735462257.png showing Home, Event Details, Play, and Community screens), keeping the rounded frame, border, and green glow; removed the now-unused lucide icon imports (LayoutDashboard, Trophy, Settings, Search, Bell, MoreHorizontal)
- **July 2026**: Changed hero heading from "All-in-One Community Empowerment & Management Platform" to "Built to Help Your Community Flourish" ("Community" in sky blue, "Flourish" in emerald green gradient accents)
- **July 2026**: Increased contrast of the Create Account card against the dark page background: card surface lifted from bg-card (8% lightness) to bg-secondary (12%) with a visible border (applies to both the onboarding wizard card and the creating/ready card)
- **July 2026**: Fixed light-grey page backgrounds on Create Account and Admin Login pages: replaced leftover light pastel gradients (emerald-50/sky-50 and slate-50) with the standard dark bg-background so the header matches the main page
- **July 2026**: Removed "Learn more" links from the feature tiles and removed the 6 feature detail pages entirely (deleted client/src/pages/feature.tsx and the /features/:slug route); feature tiles are no longer clickable
- **July 2026**: Feature tiles now use the hero "Management" sky blue: card backgrounds tinted translucent sky blue (bg-sky-500/10, sky border) and icon chips in brighter sky blue (bg-sky-500/20, text-sky-400); the first attempt used dark-mode sky-950 which looked black on the dark theme
- **July 2026**: Changed the favicon to the Tribal18 logo icon (replaced client/public/favicon.png with a 128x128 version of the golfer emblem; existing favicon links in index.html unchanged)
- **July 2026**: Removed the "Launch your community now" CTA section from the home page
- **July 2026**: Updated site logo to the icon-only Tribal18 emblem (golfer/flag, no wordmark, attached_assets/tribal8icon_1783436350353.png), replacing the earlier logo-with-text version across all pages (header, footer, hero mockup, login, create-account, contact, feature, benefit)
- **July 2026**: Rebranded from "Orbit8" to "Tribal18": replaced all "Orbit8" text with "Tribal18" and all orbit8.io domain references with tribal18.golf across the frontend (header, footer, hero mockup, SEO/Open Graph/Twitter meta tags, login, create-account onboarding, contact, admin, feature and benefit pages)
- **July 2026**: Changed "View Platform" link URL from https://demo.golfjunkies.com to https://tribal18.golf (hero and CTA sections)
- **July 2026**: Replaced hero dashboard mockup with a Tribal 18-style admin dashboard preview: browser chrome (traffic-light dots, admin.orbit8.io URL pill), sidebar navigation (Dashboard, Members, Competitions, Events, Groups, Settings), members roster with search bar, stat tiles (Active Members, Events This Month, Groups), member rows with status pills, and green glow effect; removed the old floating "Upcoming Events" widget
- **July 2026**: Removed home page sections: "How It Works", "Who is it for?", and "Testimonials" (including the "How It Works" header nav link and unused icon imports)
- **July 2026**: Full visual restyle to match the Tribal 18 reference site (dark premium theme):
  - Dark charcoal-green backgrounds site-wide (single dark theme; light/dark toggle not used)
  - Montserrat font family throughout
  - White pill-shaped primary buttons, fully rounded buttons via the shadcn Button component
  - Vibrant green accent (#55C371 / HSL 135 48% 55%) for highlights, rings, and glows
  - Added glow-effect and glow-border utilities for the dashboard mockup card
  - Added CSS fallbacks for computed border tokens (browsers without relative color syntax)
  - Improved muted text contrast (68% lightness)
- **March 2026**: Copy tweaks:
  - Changed features section heading "Build a Thriving Online Community" to "Build a thriving online community" (lowercase) on the home page
  - Changed CTA button text "Start Free Trial" to "Go Live Now" across home, feature, and benefit pages
- **March 2026**: Migrated to Replit environment with security hardening:
  - Admin credentials moved from hardcoded values to secure environment secrets (ADMIN_PASSWORD)
  - API response body logging removed to prevent sensitive data leakage
  - Onboarding API key and DNS admin email stored as environment variables
  - Deployment configured: autoscale target, build via `npm run build`, run via `node ./dist/index.cjs`
- **March 2026**: Rebranded from "Golf Junkies" to "Orbit8":
  - Removed all references to "Golf" and "Golfing" throughout the platform
  - Changed brand name from "Golf Junkies" to "Orbit8"
  - Updated hero text to "and provide specific features for different community types"
  - Updated domain references from golfjunkies.com to orbit8.io
  - Updated all SEO meta tags, Open Graph tags, and Twitter cards
- **February 2026**: Added admin panel, login, account creation, and contact pages:
  - Admin panel (/admin) with login (/admin/login) - username: admin, password stored securely
  - Admin features: View all registrations and contact submissions, edit Platform URL and Admin URL per registration
  - Registration and contact form data now saved to PostgreSQL database
  - Login page (/login) with "Organisers Login" form (email, password, forgot password link, back button)
  - Create Account page (/create-account) with multi-step onboarding:
    - Step 0 (Register): Organisation Name, Your Name, Email, Password (step indicator hidden)
    - Step 1 (Identity): Domain setup - Yes/No for existing domain, domain input, subdomain prefix editing (platform.[domain])
    - Step 2 (Terms): Terms & Conditions acceptance page
    - "No domain" shows random 5-letter subdomain on orbit8.io with option to change the prefix
    - After completion: "Creating your platform" screen with spinning cog animation for 15 seconds
    - Then "All ready" screen showing admin URL, username (email), password, and platform link with copy buttons
  - Contact page (/contact) with form (Organisation, Name, Email, Mobile, Notes) - data saved to database
  - Contact form shows "Thank You" message on submit
  - Updated header: Log In and Create Account buttons link to respective pages
  - Updated hero section: "Start Free Trial" links to /create-account, "View Platform" opens https://demo.golfjunkies.com
  - Updated pricing buttons: Starter and Professional tiers link to /create-account, Enterprise links to /contact
  - Changed "Contact Sales" to "Contact Us" throughout the site
  - Updated Launch CTA section: "Create Account" button links to /create-account
- **January 2026**: Created marketing landing page with the following sections:
  - Hero section with dashboard preview mockup
  - Features section (6 feature cards with "Learn More" links)
  - Benefits section (removed)
  - How It Works section (5 steps with icons)
  - Who Is It For section (5 audience types including Content Creators)
  - Testimonials section (3 testimonials)
  - Pricing section (3 tiers: Starter, Professional, Enterprise)
  - Launch your community now CTA section with Orbit8 logo
  - Footer with navigation links
- Created 6 dedicated feature detail pages with unique content:
  - Member Communication & Social Networking (/features/member-communication)
  - Groups & Communities (/features/groups-communities)
  - Events & Competitions (/features/events-competitions)
  - Reciprocal Play Management (/features/reciprocal-play)
  - Content Publishing & News (/features/content-publishing)
  - Analytics & Reporting (/features/analytics-reporting)
- Each feature page includes: hero section, key benefits, image placeholder, prev/next navigation, CTA section
- Created 5 dedicated benefit detail pages with unique content:
  - Increase Member Engagement (/benefits/member-engagement)
  - Simplify Management (/benefits/simplify-management)
  - Inter-Club Play Made Easy (/benefits/inter-club-play)
  - Generate Revenue Streams (/benefits/revenue-streams)
  - Improve Member Retention (/benefits/improve-retention)
- Each benefit page includes: hero section with icon, 4 detail sections, prev/next navigation with looping, CTA section
- Applied blue/green color theme for branding
- Added SEO meta tags and Open Graph tags with dynamic updates on feature pages
- Uses Orbit8 logo from attached assets

## User Preferences

Preferred communication style: Simple, everyday language.
Change logging: Log all changes (including small copy/text tweaks) in the Recent Changes section.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Build Tool**: Vite with custom plugins for Replit development experience
- **Color Theme**: Blue (#0ea5e9 sky) and Green (#22c55e emerald) for branding

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/` (home.tsx, login.tsx, create-account.tsx, contact.tsx, benefit.tsx, admin.tsx, admin-login.tsx, not-found.tsx)
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions and query client in `client/src/lib/`

### Routing Structure
- `/` - Home page (marketing landing page)
- `/login` - Login page (Organisers Login form with back button)
- `/create-account` - Account creation page (5-step onboarding, data saved to DB)
- `/contact` - Contact page (form with Organisation, Name, Email, Mobile, Notes, data saved to DB)
- `/admin/login` - Admin login page (username: admin)
- `/admin` - Admin dashboard (view registrations and contact submissions, edit Platform/Admin URLs)
- `/benefits/:slug` - Benefit detail pages (5 total)
- Benefit slugs: member-engagement, simplify-management, inter-club-play, revenue-streams, improve-retention

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API with `/api` prefix for all routes
- **Storage Interface**: Abstracted storage layer (`IStorage` interface) allowing swappable implementations

The backend structure:
- `server/index.ts` - Application entry point with middleware setup
- `server/routes.ts` - API route registration
- `server/storage.ts` - Data access layer with storage interface
- `server/vite.ts` - Development server integration with Vite HMR
- `server/static.ts` - Production static file serving

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's type-safe schema builder
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Migrations**: Managed via `drizzle-kit` with migrations output to `./migrations`

### Shared Code
The `shared/` directory contains code shared between frontend and backend:
- Database schema definitions
- TypeScript types derived from schema
- Zod validation schemas

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production Build**: Custom build script (`script/build.ts`) using:
  - Vite for client bundle (output to `dist/public`)
  - esbuild for server bundle (output to `dist/index.cjs`)
  - Selective dependency bundling to optimize cold start times

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express sessions

### Core Libraries
- **Drizzle ORM**: Type-safe database queries and schema management
- **Zod**: Runtime type validation
- **TanStack React Query**: Async state management and caching

### UI Framework
- **Radix UI**: Unstyled, accessible component primitives
- **shadcn/ui**: Pre-built component patterns using Radix + Tailwind
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript/TypeScript bundler for server
- **TypeScript**: Static type checking across the stack
