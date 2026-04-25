# Component Architecture

## Target Structure
```text
components/
  layout/
  ui/
  forms/
  sections/
```

## Directory Responsibilities
### `components/layout/`
Cross-page structure primitives.
- `SiteHeader`, `SiteFooter`
- `Container`, `Section`
- page scaffolding and navigation wrappers

### `components/ui/`
Low-level reusable primitives.
- `Button`, `Card`, `Badge`, `Divider`, `Heading`
- typography helpers and shared interaction states
- no route-specific business copy

### `components/forms/`
Form-specific elements and composition.
- `ContactForm`, `Field`, `SelectField`, validation helper components
- consent/privacy helpers
- success/error state rendering

### `components/sections/`
Narrative page sections composed from `ui/` + `layout/`.
- `HomeHeroSection`, `ServicesOverviewSection`, `FaqSection`
- can contain content defaults but support prop overrides

## Split Heuristics
Split components when one of these is true:
- repeated in 2+ places
- mixed responsibilities (layout + business logic + rendering)
- class lists become hard to read/maintain
- independent testability or content reuse is needed

## Server-First Philosophy
- Default to Server Components for content sections and static UI.
- Use Client Components only for:
  - stateful interactivity (accordion, form interactions)
  - browser APIs
  - animation that requires client runtime

Document why a component needs `'use client'` at file top comments if non-obvious.

## Naming Conventions
- Use descriptive PascalCase (`TherapistCredentialsCard`).
- Suffix by role when helpful: `Section`, `Card`, `Form`, `Item`.
- Keep file names aligned with exported component names.

## Data and Props
- Favor explicit prop objects over broad optional bags.
- Keep props minimal and purpose-driven.
- Avoid boolean explosion; use variant enums/unions when complexity grows.

## Import and Dependency Direction
Preferred direction:
- `sections` depends on `layout` + `ui` + `forms`
- `forms` depends on `ui`
- `ui` depends on nothing domain-specific

Do not invert this dependency chain.
