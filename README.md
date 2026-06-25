# Odyssey Counselling Frontend

Premium bilingual counselling website workspace for Turkish-speaking communities in the United Kingdom.

This repository is intentionally structured as an **AI-ready engineering workspace**: future coding sessions should have complete context on brand, architecture, UX principles, and delivery standards before building features.

## Project Purpose
Odyssey Counselling requires a web experience that communicates trust immediately for users arriving in emotionally sensitive states. The product direction is calm, refined, clinically credible, and culturally intelligent.

This codebase supports:
- a premium trust-first brand website
- scalable frontend architecture on Next.js
- reusable AI documentation for consistent execution

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Getting Started
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Scripts
- `npm run dev` — run local dev server
- `npm run lint` — run ESLint checks
- `npm run build` — create production build
- `npm run start` — serve production build


## Contact Form Email Settings
The contact form submits through a server action and sends email with Resend. Configure these environment variables in local `.env.local` and in your hosting provider:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FORM_FROM=noreply@odysseycounselling.uk
CONTACT_FORM_TO=imran@odysseycounselling.uk
```

Required provider setup:
- Verify the `odysseycounselling.uk` domain in Resend.
- Add the DNS records Resend provides for SPF/DKIM/domain verification.
- Keep `CONTACT_FORM_FROM` on the verified domain, preferably `noreply@odysseycounselling.uk`.
- Point `CONTACT_FORM_TO` to the inbox that should receive website enquiries.

## Repository Structure
```text
app/                  # Next.js routes, layout, and global styles
public/               # static assets
.ai/                  # AI operating system (context, standards, playbooks)
AGENTS.md             # senior-level operating manual for autonomous agents
CLAUDE.md             # concise coding-agent quick reference
README.md             # project overview and contributor setup
```

## AI Workflow (Required)
1. Start with `AGENTS.md` and `.ai/frontend-skill.md`.
2. Review `.ai/design-system.md`, `.ai/design-tokens.ts`, and `.ai/content-strategy.md` before any UI work.
3. Follow `.ai/coding-standards.md` for implementation decisions.
4. Use `.ai/task-playbooks.md` to execute common tasks consistently.
5. Keep docs updated when architecture or conventions evolve.

## Planned Route Surface
- `/`
- `/about`
- `/services`
- `/therapist`
- `/faq`
- `/contact`
- `/blog` (future)
- `/resources` (future)
- `/book` (future)
- `/privacy-policy` (future)
- `/terms` (future)

## Roadmap Summary
- Phase 1: Brand website foundations
- Phase 2: Booking funnel and trust conversion UX
- Phase 3: SEO content engine
- Phase 4: CMS integration
- Phase 5: Growth systems and experimentation
- Phase 6: Automation + CRM integration

Detailed roadmap: `.ai/future-roadmap.md`.

## Docker deployment

This project is containerized for production deployment with Next.js standalone output.

Build and run with Docker Compose:

```bash
docker compose up --build
```

Or build and run the image directly:

```bash
docker build -t odysseycounselling:latest .
docker run --rm -p 3000:3000 odysseycounselling:latest
```

The application listens on port `3000` inside the container.
