# UI redesign validation

Branch: `codex/ui-redesign`

The portfolio now uses an editorial systems-design direction: large asymmetric typography, an original geometric systems illustration, dark project studies, and a contrasting experience/skills section. Existing project detail content, experience, education, credentials, and external destinations are retained.

## Browser verification

Live local browser checks on September 7, 2026:

| Viewport | Horizontal page overflow |
| --- | --- |
| 320 × 568 | None |
| 375 × 667 | None |
| 390 × 844 | None |
| 430 × 932 | None |
| 768 × 1024 | None |
| 844 × 390 | None |
| 1024 × 768 | None |
| 1280 × 800 | None |
| 1440 × 900 | None |
| 1920 × 1080 | None |

Measured both document and body scroll widths against the actual viewport; checked rendered content bounds. Decorative illustration geometry is intentionally cropped within its own panel. No global horizontal-overflow hiding is used to mask layout problems.

- Visually inspected desktop hero, phone hero/projects, tablet experience/skills, and phone work dialog.
- Verified all three project buttons open with Enter, focus the close button, dismiss with Escape, and restore focus to their triggering button.
- Verified work dialog focus remains inside the modal on Tab and closes with Escape.
- Verified close-button dismissal and home/section navigation.
- All project dialogs had equal content scroll/client widths at 390px.
- SFSS dialog at 320px had 302px scroll/client width; scrolled to its final content with the close control remaining visible.
- No browser warnings or errors were captured.

## Implementation

Fixed-width thumbnail wrappers and the fixed five-column language grid were replaced with fluid layouts. Mobile navigation remains available. Native modal dialogs provide focus containment and background inertness, with scroll-lock cleanup and focus restoration. Reduced-motion preferences disable transitions and smooth scrolling. The portrait import now uses the asset’s actual uppercase extension for case-sensitive builds.

Production build, ESLint, and Git whitespace checks pass. Physical devices, separate browser engines, and production hosting were not tested or deployed.
