# Odyssey Counselling Design System

## Design Intent
Create a quiet, premium, clinically trustworthy digital environment for emotionally sensitive users. Every interface decision should lower cognitive load and reduce anxiety.

## Color System (Mandatory)
- `background`: `#f3fbf7`
- `surface`: `#ffffff`
- `surface-soft`: `#e8f0ec`
- `surface-muted`: `#edf5f1`
- `primary`: `#0f172a`
- `primary-soft`: `#131b2e`
- `text`: `#161d1b`
- `text-soft`: `#526258`
- `text-muted`: `#76777d`
- `accent-sand`: `#d6c2a8`
- `accent-sage`: `#c7d9cc`
- `border`: `#dce4e0`
- `border-soft`: `#eef2ef`
- `success`: `#7aa67d`
- `error`: `#ba1a1a`

Usage guidance:
- Keep large surfaces light.
- Use primary tones for typography and high-importance actions.
- Use accents sparingly to avoid visual stimulation.

## Typography
- Heading font: **Noto Serif**
- Body/UI font: **Inter**

Scale:
- Hero: `text-5xl md:text-7xl`
- Section title: `text-3xl md:text-5xl`
- Subheading: `text-xl md:text-2xl`
- Body: `text-base md:text-lg`
- Small labels: `text-xs uppercase tracking-[0.18em]`

## Spacing and Layout Rhythm
- Section spacing: `py-24 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-8`
- Maintain long vertical breathing room between narrative sections.
- Avoid stacking dense cards or short-gap blocks.

## Radius Language
- Buttons: `rounded-xl`
- Cards: `rounded-2xl`
- Feature panels: `rounded-[2rem]`
- Hero blocks: `rounded-[3rem]`

## Shadow System
Very soft only.
- Prefer subtle ambient elevation (low blur + low opacity).
- Never use hard drop shadows or aggressive contrast edges.

## Motion Principles
Use subtle motion only:
- `transition-all duration-300`
- `hover:-translate-y-1`
- `hover:shadow-xl`

Rules:
- Motion should confirm interaction, not attract attention.
- Avoid parallax, bounce, dramatic reveals, or looping decorative animation.
- Respect reduced motion preferences.

## UI Behavior Standards
- Predictable navigation and stable layout hierarchy.
- Obvious affordances for actions.
- Minimal decision branches per screen.
- Form states must be explicit: idle, focus, error, success.

## Accessibility Standards
- WCAG-conscious color usage and contrast verification.
- Semantic landmarks (`header`, `main`, `nav`, `footer`).
- Heading hierarchy without skipping levels.
- Keyboard navigability for all controls.
- Clear labels and descriptive validation messages.
- Focus states visible and aesthetically integrated.
