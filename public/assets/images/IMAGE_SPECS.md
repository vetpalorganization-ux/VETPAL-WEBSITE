# VETPAL Image Specs

Use these sizes when cropping photos before placing them in `public/assets/images/`.
All sizes are in pixels. Use WebP when possible.

Global standards
- Hero banners (full-width): 2400x1200 (2:1)
- Hero mobile: 1600x2000 (4:5)
- Card images (landscape): 1200x675 (16:9)
- Feature split sections (image + text): 1600x1000 (16:10)
- Portraits (profiles/testimonials): 1200x1500 (4:5)
- Square avatars/logos: 1000x1000 (1:1)

Page-by-page image slots

Home (Index)
- No image slots yet (layout is component-based and currently text/graphics only).
- If a hero image is added later: use 2400x1200 plus 1600x2000 mobile variant.

About (`src/pages/About.tsx`)
- No image slots yet (placeholders are icon-only).
- If team photos are added: 1000x1000 (1:1) per team member.

Programs / Get Involved / Donate / Contact
- No image slots detected yet.
- If section images are added: use 1600x1000 (16:10).

Campaigns (`src/pages/Campaigns.tsx`)
- Campaign card images: 1200x675 (16:9)
- Featured campaign cards: 1200x675 (16:9)

Campaign Detail (`src/pages/CampaignDetail.tsx`)
- Hero image: 2400x1200 (2:1)
- Impact story image: 1200x1500 (4:5) or 1000x1000 (1:1) if square feels better

Events (`src/pages/Events.tsx`)
- Event cards (featured + list): 1200x675 (16:9)
- Event dialog image: 1200x675 (16:9)

News (`src/pages/News.tsx`)
- Article cards (featured + grid): 1200x675 (16:9)

News Detail (`src/pages/NewsDetail.tsx`)
- Article hero image: 2400x1200 (2:1)
- Author avatar: 1000x1000 (1:1)
- Related story cards: 1200x675 (16:9)

Auth pages (`src/pages/SignIn.tsx`, `src/pages/CreateAccount.tsx`, `src/pages/Auth.tsx`)
- Logo images are already in `public/assets/branding/`
- If background imagery is added later: 2400x1200 (2:1)

Shared backgrounds
- Pattern backgrounds use `/ocean-pattern.svg` (no sizing needed).

Naming examples (from README)
- home-hero-veteran-handshake-wide.webp
- news-featured-coastal-cleanup-v1.webp
- campaigns-coral-restoration-card-v1.webp
- events-beach-cleanup-card-v1.webp
- about-team-brenden-wing-square.webp
