# Coding Standards

## TypeScript
- Strict TypeScript required.
- Define explicit prop and data contracts.
- Avoid `any`; use unions/generics where appropriate.

## Component Design
- Keep components small and focused.
- Extract repeated patterns into reusable primitives.
- Prefer composition over inheritance and monolith components.

## Rendering Strategy
- Server Components first.
- Add Client Components only when interaction demands it.
- Keep client bundles lean.

## HTML and Accessibility
- Semantic HTML first (`main`, `section`, `article`, `nav`, `button`, `form`).
- Proper heading hierarchy.
- Explicit labels, helper text, and validation messages.
- Keyboard and focus-state support for interactive elements.

## Styling
- Tailwind utility patterns with shared token alignment.
- Consistent spacing and typography rhythm.
- No ad-hoc style drift from defined design tokens.

## Code Readability
- Prefer clear names over abbreviations.
- Avoid deeply nested render branches.
- Keep functions short and intentional.

## Duplication and Reuse
- No copy-pasted section logic across pages.
- Shared UI belongs in `components/ui`.
- Shared layout belongs in `components/layout`.

## Imports and File Hygiene
- Keep imports ordered consistently: external, internal absolute, relative.
- Remove dead code and unused imports.
- Keep files single-responsibility where practical.

## Quality Gates
Minimum before shipping meaningful changes:
- `npm run lint`
- `npm run build` (for structural/frontend work)
