# CTPPOC-87 — Landing Page Responsive Specs

Breakpoints
- desktop-lg: ≥1280px
- desktop: 1024–1279px
- tablet: 768–1023px
- mobile: <768px

Layout
- Container max-width: 1140px, centered
- Gutters: 24px desktop, 20px tablet, 16px mobile
- Columns: 12/8/4 per breakpoint

Typography
- Family: Inter, system fallback
- Scale: 56/40/32/24/20/16
- Line-heights: 1.1 for display, 1.3 headings, 1.6 body

Color
- Primary: #4F46E5
- Accent: #06B6D4
- Background: #FFFFFF
- Text: #0F172A
- Muted: #475569
- Borders: #E2E8F0

Components
- Button Primary: 16px/24px padding, radius 10px, bg Primary, text #FFF
- Button Secondary: outline Primary 1.5px, text Primary
- Card: radius 16px, shadow sm, padding 24/20/16
- Input: radius 10px, border #CBD5E1, focus ring Primary 2px

Hero
- Layout: 2-col split on desktop (6/6), stacked on mobile
- Media: illustrative SVG/PNG, max 520px width desktop
- Spacing: top 96px desktop, 64px tablet, 48px mobile

Logos/Proof
- Logo height: 24–36px
- Grid: auto-fit minmax(120px, 1fr), gap 24px

Features
- Cards per row: 3 desktop, 2 tablet, 1 mobile
- Icon size: 40px, circle background accent-50

How it works
- Steps: 3 columns desktop, vertical mobile
- Connector: dashed line or chevrons

Testimonials
- Card width: 320–480px
- Avatar: 40px round, name bold 16, role 14 muted

CTA band
- Background: Primary 5–10% tint
- Content: heading 32/24/20, button primary

Footer
- Columns: 4 desktop, 2 tablet, stacked mobile
- Link spacing: 8px, group spacing 24px

Accessibility
- Contrast AA+ for text
- Focus visible styles mandatory
- Min target size 44x44
- Motion reduced for prefers-reduced-motion

Tokens (px unless unit noted)
- space: 4 8 12 16 20 24 32 40 48 64 96
- radius: 6 8 10 16 24
- shadow-sm: 0 1 2 rgba(0,0,0,0.05)
- shadow-md: 0 8 24 rgba(0,0,0,0.08)
