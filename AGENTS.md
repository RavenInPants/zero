# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

The public film page must match the quest's shared film canon: show all six key scenes, the film team, and neutral production notes without clues about the later investigation. The working archive's numbered files and host hint must match `Нулевой пассажир — тексты подсказок.md` and `Квест v2 — инструкция ведущей.md`.

The quest evening is 25 October 2026. The active game is planned for about 17:00–18:35. By the Director's order, the Operator takes a quick unposed group photo around 17:35 without Lika, then a posed photo with all eight guests after her return. The Lika cabinet access log spans 17:30–17:37. The Director theatrically dies after the second toast; the host reads the prepared note with the ORION archive code. Keep public content and archive dates aligned with the canonical documents.
