# Odyssey Counselling — Agent Quickstart

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript 5 (strict)
- Tailwind CSS 4
- ESLint 9

## Architecture Snapshot
- `app/` route tree (server-first rendering)
- `app/layout.tsx` global shell
- `app/page.tsx` homepage entry
- `app/globals.css` global styles
- Future shared system under `components/` and `lib/`
- AI operating docs in `.ai/`

## Core Commands
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run start`

## Route Plan
Current:
- `/`

Planned:
- `/about`
- `/services`
- `/therapist`
- `/faq`
- `/contact`
- `/blog`
- `/resources`
- `/book`
- `/privacy-policy`
- `/terms`

## Design Rules (Non-Negotiable)
- Calm, premium, healthcare-safe UI
- Generous spacing and restrained contrast
- Soft shadows only, subtle motion only
- Typography: Noto Serif (headings), Inter (body/UI)
- Trust-first, anxiety-reducing page flow

## Do / Don’t
Do:
- Prefer Server Components
- Keep components focused and composable
- Use semantic HTML and accessible forms
- Keep copy empathetic and precise

Don’t:
- Use flashy animations or loud visual effects
- Ship generic SaaS marketing tone
- Add client-side code without necessity
- Break design tokens or spacing rhythm
