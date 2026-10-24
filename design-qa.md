# Design QA — «Нулевой пассажир»

Статус: историческая проверка визуального прототипа. Содержание финального игрового комплекта определяется файлом `../Финальный комплект — навигация.md`.

## Comparison target

- Source visual truth: `/Users/raven/.codex/generated_images/01a15fe5-22c8-7a33-ae51-5153baffa5b6/exec-2ae5fc87-6668-4328-9119-c682341774c4.png` (1672 × 941 px).
- Implementation: browser-rendered `http://localhost:4173/?inspect=hero-final`, captured in the in-app browser during this task at 1440 × 810 CSS px (1× density). The browser-rendered capture is visible in the task output.
- Compared state: desktop landing-page hero at the top of the page. The source was normalized conceptually to the same 16:9 framing; implementation uses a newly generated dedicated background (`public/assets/zero-passenger-hero.png`, 1672 × 941 px), rather than placing a UI mockup as a background image.
- Focused-region comparison: hero title, CTA, top navigation and the reflected face/red signal were checked because they determine the chosen reference's hierarchy.

## Findings

- [Resolved P1] Hero hierarchy was initially mirrored from left to right.
  - Evidence: the selected visual places the train/reflection on the left and the title/action on the right; the first implementation placed both image subject and title on the left.
  - Fix: moved `.hero-copy` to the right for desktop, preserved a left-aligned mobile layout, and coloured the second title line red.
  - Post-fix evidence: browser capture at `?inspect=hero-final` matches the reference's two-column tension and title hierarchy.

## Fidelity surfaces

- Fonts and typography: Cormorant Garamond gives the title the editorial serif presence of the reference; Manrope preserves legibility for the navigation, metadata and CTA. Large title, small all-caps labels and line-height were reviewed at desktop and mobile sizes.
- Spacing and layout rhythm: the hero is a 16:9 desktop frame with a thin header divider, protected left visual region and right title column. On mobile, text falls below the visual focal point and the CTA spans the available width.
- Colors and visual tokens: near-black blue base, warm off-white copy, one restrained #dd312c / #d92e2c alert red, and low-contrast dividers match the selected direction.
- Image quality and asset fidelity: a purpose-built 1672 × 941 px cinematic train image is used; its rain-covered window, face reflection and red signal carry the same narrative role as the mockup without rasterizing the interface itself.
- Copy and content: title, genre, CTA and the archive state are in Russian and correspond to the quest canon.

## Interaction checks

- Primary CTA scrolls to the film materials section.
- Header navigation scrolls to the corresponding public sections.
- The archive dialog opens, accepts the configured demonstration code, shows the success state and can be dismissed.
- Browser console check: no errors.
- Responsive check: desktop 1440 × 810 and mobile 390 × 844 browser captures were reviewed.

## Follow-up polish

- [P3] Add individual character and scene photographs when the content for the public press kit is approved.
- [P3] Replace the demonstration archive code with the final host-selected phrase before the game.

final result: passed
