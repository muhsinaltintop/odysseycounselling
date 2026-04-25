# Task Playbooks

## 1) Build a New Page
1. Confirm route objective in `.ai/routes-map.md`.
2. Draft content structure with trust-first narrative.
3. Compose page using existing section primitives.
4. Add route metadata.
5. Validate a11y, responsive layout, and spacing rhythm.
6. Run lint/build checks.

## 2) Redesign an Existing Page
1. Identify friction points (trust, clarity, pacing).
2. Keep successful sections; replace only weak patterns.
3. Preserve calm visual language and token consistency.
4. Ensure CTA remains low-pressure and clear.
5. Re-run quality gates.

## 3) Add CMS
1. Define content model by route and section type.
2. Preserve server-first rendering with cached fetch strategy.
3. Add schema validation layer for CMS payloads.
4. Build fallbacks for missing content.
5. Document editorial workflow and governance.

## 4) Improve Lighthouse
1. Measure baseline.
2. Optimize images/fonts and reduce JS.
3. Remove unnecessary client boundaries.
4. Improve semantic markup and metadata.
5. Re-test and record gains.

## 5) Add Multilingual Support
1. Choose routing strategy (locale segments or domain strategy).
2. Externalize copy into translation dictionaries.
3. Preserve meaning, not literal word-for-word translations.
4. QA both languages for tone and trust signals.
5. Validate layout integrity in both languages.

## 6) Refactor Components
1. Identify duplication and fragile patterns.
2. Extract stable primitives first.
3. Keep API contracts minimal and typed.
4. Update all usages and run lint/build.
5. Document new conventions.

## 7) Improve Conversions (Trust-First)
1. Analyze drop-off between reassurance and action blocks.
2. Improve clarity of next steps and expectations.
3. Reduce CTA friction (fewer fields, clearer intent).
4. Reinforce privacy and professionalism near action points.
5. A/B test only calm, ethically appropriate variants.

## 8) Implement Forms
1. Define required fields and consent text.
2. Ensure accessible labels, validation, and errors.
3. Provide confidence messaging (privacy + response times).
4. Handle submit states clearly (loading/success/error).
5. Log safely without exposing sensitive details.
