<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Odyssey Counselling — Autonomous Engineering Handbook

## 1) Mission and Product Context
Odyssey Counselling is a premium, bilingual (Turkish-English) counselling brand in the UK. This product serves emotionally vulnerable users who are often arriving in a stressed state. Every engineering decision must reduce anxiety, increase trust, and protect privacy.

This is a healthcare-adjacent trust product, not a growth-hack marketing site.

## 2) Operating Principles for All Agents
1. **Calm over clever**: choose clarity, whitespace, and simple interactions over novelty.
2. **Trust before conversion**: copy, layout, and interactions should signal competence and safety before asking users to act.
3. **Clinical professionalism**: avoid exaggerated claims, manipulative UX, or visual noise.
4. **Cultural intelligence**: bilingual and bicultural realities are first-class concerns, not add-ons.
5. **Accessibility is non-negotiable**: semantic HTML, keyboard support, visible focus states, sufficient contrast.
6. **Server-first engineering**: default to Server Components; use Client Components only for true interactivity.
7. **Performance is emotional UX**: fast, stable pages lower stress and improve perceived safety.

## 3) Brand and Design Expectations
The UI expression must feel:
- calm
- refined
- safe
- elegant
- intelligent
- clinically trustworthy
- Scandinavian minimal
- editorial luxury

Design references: Apple × Aesop × Private Therapy Clinic.

Hard rules:
- generous whitespace
- muted palette and soft contrast transitions
- no flashy motion
- no harsh shadows
- no crowded hero regions

## 4) Engineering Quality Bar
A change is production-ready only when it is:
- **Readable**: obvious naming, small components, minimal nesting.
- **Reusable**: common patterns extracted into composition-friendly primitives.
- **Typed**: strict TypeScript with explicit contracts for props and data.
- **Accessible**: landmarks, headings, labels, aria only when needed.
- **Tested**: lint + build at minimum for structural changes.
- **Documented**: update `.ai/` docs when conventions or architecture changes.

## 5) Safe Shipping Workflow
1. Read task and map it to existing `.ai/*` guides.
2. Inspect current route/component patterns before coding.
3. Implement smallest viable delta.
4. Run checks (`npm run lint`, `npm run build` when relevant).
5. Verify no regressions in structure, semantics, and performance.
6. Update docs if the system behavior changed.
7. Commit with clear, scoped message.

## 6) What Premium Means in This Repo
Premium quality in this project means:
- polished restraint, not decorative complexity
- confidence through consistency
- copy that is human, respectful, and emotionally intelligent
- interactions that feel intentional and quiet
- zero “template energy” in finished output

## 7) What to Avoid
- Generic startup language (“10x”, “crush”, “dominate”)
- High-saturation color blocks or aggressive gradients
- Motion-heavy entrance animations
- Popups or urgency tactics that increase pressure
- Overusing Client Components or unnecessary libraries
- Duplicated UI patterns without shared primitives

## 8) Required Source of Truth
Before implementing features, use:
- `.ai/frontend-skill.md` for implementation standards
- `.ai/design-system.md` and `.ai/design-tokens.ts` for visual consistency
- `.ai/content-strategy.md` for page messaging and tone
- `.ai/coding-standards.md` for code quality and architecture

If conflict exists, prioritize: task instructions > AGENTS.md > file-local conventions.
