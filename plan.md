# Implementation Plan - ValCura (The Curated Media & Digital Rewards Hub)

Build a premium entertainment and tech-review magazine platform with a "Watch, Review, and Earn" ecosystem.

## Scope Summary
- **Premium Editorial Frontend:** High-end, clean sans-serif typography, grid-based layouts, and a sophisticated color palette (Midnight Navy, ValCura Slate, Electric Mint).
- **Core User Flow:**
    1. **Content Discovery:** Dashboard with categories (Tech Unboxing, Indie Cinema, etc.).
    2. **Media Hub:** Video player with 400-600 word editorial reviews and user engagement (ratings/comments).
    3. **Points Economy:** Engagement tracker (+10 ValPoints) for dashboard and rewards vault.
- **Pages:** Home, Media/Review Pages, Rewards Vault, Editorial Blog, and Compliance pages (About, Contact, Privacy, TOS).
- **Persistence:** Client-side only (localStorage) for ValPoints and engagement logs.

## Non-Goals
- No backend/Supabase integration (per session constraints).
- No actual Google AdSense account connection (only placeholders/compliance-ready layouts).
- No real monetary transactions (simulated rewards).

## Assumptions & Open Questions
- **Assumption:** Videos will be embedded from YouTube or provided via static URLs.
- **Assumption:** Editorial content will be hardcoded or provided in a local JSON "mock database" for demo purposes.
- **Question:** Are there specific video IDs to start with? (I will provide a set of high-quality tech/cinema placeholders).

## Affected Areas
- **Frontend Components:** Layout, Navigation, Media Player, Review Block, Tracker Widget, Rewards Catalog.
- **State Management:** React state + localStorage for points and user activity tracking.
- **Styling:** Tailwind CSS with a custom theme for the ValCura brand identity.

---

## Phase 1: Foundation & Design System (frontend_engineer)
- Set up custom theme in `src/index.css` or Tailwind config with ValCura colors and typography (Plus Jakarta Sans).
- Create basic Layout component (Header with logo and Engagement Tracker widget, Footer).
- Implement standard "Advertisement" placeholder components with clear labels for compliance.
- **Deliverable:** Brand-consistent shell and shared UI components.

## Phase 2: Home Page & Discovery (frontend_engineer)
- Build the "Media Magazine" Home Page.
- Hero section and category grid (Tech, Indie Cinema, Documentaries, Gaming).
- Article feed mixed with trending video blocks.
- **Deliverable:** Interactive landing page with content discovery.

## Phase 3: Media Hub & Engagement Logic (frontend_engineer)
- Create the Individual Media Page template (Split-screen/Stacked).
- Integrate Video player with "ValCura Editorial & Review Block".
- Implement the "User Engagement Segment" (5-star rating, comment box).
- Develop the `EngagementTracker` logic: monitors time/interaction and triggers the "+10 ValPoints" notification.
- **Deliverable:** Functional watch-and-earn loop.

## Phase 4: Rewards Vault & Compliance Pages (frontend_engineer)
- Build the ValCura Rewards Vault (Dashboard) with points total and redeemable catalog.
- Implement the "Engagement Logs" view.
- Create Editorial Blog layout for standalone long-form articles.
- Add Legal pages (About, Contact, Privacy, TOS) with the required compliance disclaimers.
- **Deliverable:** Complete sitemap with all supporting content and legal infra.

## Phase 5: Polishing & Final Compliance Check (quick_fix_engineer)
- Review all text for "Premium Authority" tone.
- Ensure all "Advertisement" labels are correctly positioned and visible.
- Add the Global Policy Disclaimer to the Rewards Vault.
- Fine-tune animations for reward triggers.
- **Deliverable:** Production-ready, polished deployment.

---

## Sequencing Constraints
- Phase 1 must be completed first to establish the visual language.
- Phase 3 depends on the state management logic established for tracking points.
- Phase 5 is the final review before handover.