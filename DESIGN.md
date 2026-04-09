# Design Brief: Swede Deal Candy

## Purpose
Playful e-commerce candy shop website with product catalog, order form, and admin dashboard. Memorable, joy-first candy boutique aesthetic.

## Tone & Aesthetic
Playful maximalist candy shop — vibrant, sweet, joyful, modern candy boutique with retro-playful touches. Not overly cutesy; contemporary with personality.

## Color Palette

| Token | OKLCH | Light | Dark | Usage |
|-------|-------|-------|------|-------|
| Primary | 0.6 0.24 2 | Hot pink | Vibrant pink | CTAs, highlights, interactive |
| Secondary | 0.55 0.21 24 | Warm candy red | Deeper red | Secondary actions |
| Accent | 0.7 0.15 125 | Soft mint | Mint green | Accents, highlights |
| Background | 0.98 0.01 95 | Warm cream | Dark slate | Page background |
| Card | 0.99 0 0 | White | Charcoal | Product cards, sections |
| Foreground | 0.2 0.02 280 | Deep navy | Light gray | Text |
| Muted | 0.92 0.02 280 | Light gray | Dark gray | Secondary text, borders |
| Destructive | 0.55 0.22 25 | Red | Red | Destructive actions |

## Typography
- **Display**: Nunito (rounded, playful, candy-shop vibe)
- **Body**: Plus Jakarta Sans (clean, readable, modern)
- **Mono**: JetBrains Mono (code, admin interfaces)

## Structural Zones

| Zone | Light | Dark | Details |
|------|-------|------|---------|
| Header | Warm cream with pink bottom border | Dark slate with pink stripe | Navigation, branding, top anchor |
| Content | White/cream cards on warm background | Charcoal cards on dark background | Product grid, forms, sections with 2px border |
| Footer | Light muted gray with subtle border | Dark muted with light border | Links, info, grounded in page |
| Cards | White with soft shadow, rounded | Charcoal with elevation shadow | Product cards, form sections, popover |

## Border Radius
- lg: 0.75rem (12px) — card corners, major components
- md: 0.625rem (10px) — input fields, secondary components
- sm: 0.375rem (6px) — small elements, badges

## Component Patterns
- **Buttons**: Rounded, pink primary, warm red secondary, high contrast in dark mode
- **Inputs**: Soft rounded, light border, focus ring = primary pink
- **Cards**: White/charcoal with 2px border, soft shadow, rounded 12px
- **Product Grid**: 3 columns desktop, 2 tablet, 1 mobile, gap 1.5rem

## Motion
- All transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Hover: scale 1.02 on cards, opacity shift on text
- Focus: ring using primary color

## Signature Detail
Rounded everything — buttons, inputs, cards, borders — with warm candy-shop color palette creating playful, cohesive identity. Warm cream background and white cards contrast against playful pinks/reds/mints.

## Differentiation
Hot pink primary color uncommon in e-commerce; warm cream background vs. cold white; rounded forms throughout; candy-first color language (warm reds, pinks, pastels) rather than corporate blues.
