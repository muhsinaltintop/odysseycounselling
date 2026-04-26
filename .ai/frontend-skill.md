# Frontend Skill: Odyssey Counselling

This guide defines how any future AI agent should build frontend features in this repository.

## 1) Objective Function
Optimize for: **trust, calm, clarity, and clinical credibility**.

Before coding, validate each decision against this question:
> Does this reduce anxiety for an emotionally vulnerable user?

If not, redesign.

## 2) Page Composition Rules
Each page should follow this narrative structure:
1. **Reassurance Header** — who this is for + emotionally safe tone.
2. **Clinical Credibility Block** — credentials/process/professional framing.
3. **Service Explanation** — practical clarity on what happens next.
4. **Trust Reinforcement** — privacy, bilingual fit, expectations.
5. **Gentle CTA** — low-pressure invitation to contact/book.

Composition constraints:
- One primary CTA per section.
- Avoid dense multi-column content on first viewport.
- Prioritize linear reading flow over decorative layout complexity.

## 3) Section Patterns
Recommended reusable section types:
- Hero reassurance section
- “How therapy works” timeline
- Therapist profile with credentials and approach
- Services matrix (simple, non-salesy)
- FAQ accordion (clear, plain language)
- Contact panel with expectations and response time

All sections must include clear headings and breathing room.

## 4) Responsive Behavior Standards
- Mobile-first layout decisions.
- Avoid collapsing into crowded card grids on small screens.
- Maintain readable line lengths and generous tap targets.
- Preserve hierarchy: headline → supporting copy → action.

Breakpoints should enhance rhythm, not add visual noise.

## 5) Tailwind Style Rules
- Use tokens from `.ai/design-system.md` and `.ai/design-tokens.ts`.
- Prefer utility composition over ad-hoc arbitrary styles.
- Use consistent spacing rhythm (`py-24 md:py-32`, container conventions).
- Keep class lists readable; extract repeated groups into components/helpers.

## 6) Accessibility Requirements
- Semantic landmarks and heading order.
- Sufficient color contrast and visible focus rings.
- Form labels always visible; placeholders are supplementary only.
- Error messaging must be specific and calm in tone.
- Respect reduced motion preferences.
- Never pair dark backgrounds with dark text (or light backgrounds with low-contrast light text); explicitly verify contrast in Hero and CTA blocks before shipping.

## 7) Performance Requirements
- Server Components first.
- Client Components only for genuine interactivity.
- Minimize JS shipped to client.
- Use optimized image and font loading strategies.
- Avoid heavy animation libraries unless justified.

## 8) SEO Requirements
- Unique metadata per route (title + description + OG basics).
- Logical heading structure with one `h1` per page.
- Service/location/language relevance in copy (naturally, no keyword stuffing).
- Internal linking strategy between evergreen pages.

## 9) Copywriting Tone Rules
Tone: warm, respectful, composed, professional.

Do:
- use simple human language
- acknowledge hesitation and emotional complexity
- explain process clearly

Don’t:
- use hype, urgency, or manipulative persuasion
- overpromise outcomes
- sound corporate or transactional

## 10) Component Reuse Strategy
- Start with foundational primitives in `components/ui`.
- Compose page-level sections in `components/sections`.
- Keep content-bearing components configurable by structured props.
- Extract repeated layout wrappers (`Section`, `Container`, `Stack`) early.

## 11) Premium Healthcare UX Heuristics
- Calm first paint: clear heading, muted palette, minimal distractions.
- “What happens next” should be easy to find on every key page.
- Contact and privacy reassurance should be visible without searching.
- Use deliberate pacing: content blocks should feel breathable.

## 12) Trust-First Conversion Strategy
Conversion is not aggressive lead capture. It is supportive progression.

Trust sequence:
1. “I feel understood.”
2. “This looks professional and safe.”
3. “I understand how this works.”
4. “I can take a small next step.”

CTA language should be gentle:
- “Book an initial consultation”
- “Send a confidential enquiry”
- “Ask a question before booking”
