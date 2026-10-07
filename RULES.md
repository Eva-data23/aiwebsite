# Marvy — Project Specifications & Development Rules

> **Project Identity:** Marvy — A modern, high-craft editorial publication & blog.  
> **Aesthetic Philosophy:** Editorial magazine meets modernist architecture. Distinctive, tactile, typography-driven, and intentionally anti-generic.

---

## 1. Project Directory Structure

Strict adherence to the established folder conventions:

```
vibecoder/
├── media/                  # Images, custom SVG icons, illustrations, and media assets
├── script/                 # JavaScript logic files
│   ├── data.js             # Blog posts dataset & state management
│   └── main.js             # Core interactions, routing, filtering, micro-animations
├── style/                  # CSS stylesheets
│   ├── variables.css       # Design tokens (colors, typography, spacing, shadows)
│   └── style.css           # Global layout, component styles, editorial rules, responsive queries
├── index.html              # Home page: Featured story, trending dispatches, recent articles
├── about.html              # About page: Publication manifesto, editorial voice, author bios
├── blogs.html              # Blogs archive: Search, category filtering, reading cards
├── contact.html            # Contact page: Interactive editorial inquiry form & socials
└── RULES.md                # Project documentation & guidelines
```

*Note: Ensure all HTML files live in the root directory, stylesheets inside `style/`, scripts inside `script/`, and imagery inside `media/`.*

---

## 2. Tech Stack

- **Markup:** Semantic HTML5 (`<article>`, `<section>`, `<header>`, `<nav>`, `<aside>`, `<footer>`, `<figure>`).
- **Styling:** Modern Vanilla CSS (CSS Custom Properties, CSS Grid, Flexbox, `clamp()` fluid sizing). No Tailwind, Bootstrap, or utility bloat.
- **Scripting:** Modular Vanilla JavaScript (ES6+). Zero external frameworks or heavy dependencies. Fast, zero-lag client-side performance.

---

## 3. Recommended Design System & Color Palette

To avoid the generic "AI template" look (purple gradient buttons, generic white cards), **Marvy** uses an **Editorial Obsidian & Terracotta Glow** palette inspired by independent cultural journals:

### Color Tokens
- **Background (Deep Obsidian):** `#0E1013` (rich, warm near-black)
- **Surface Elevation 1 (Card/Section):** `#16191E`
- **Surface Elevation 2 (Hover/Accent surface):** `#1E232B`
- **Surface Border:** `rgba(255, 255, 255, 0.09)` (crisp, delicate hairline borders)
- **Primary Accent (Terracotta Flame):** `#FF5733` / `#E84A27` (punchy, energetic editorial highlight)
- **Secondary Accent (Acid Lime / Olive):** `#D2F850` (curated high-contrast tag accents)
- **Text Primary (Alabaster):** `#F3F4F6`
- **Text Secondary (Warm Slate):** `#9DA3AF`
- **Text Muted:** `#5E6573`

### Typography Hierarchy
- **Display / Editorial Headings:** Google Font **'Syne'** or **'Cinzel'** / **'Playfair Display'** (distinctive, confident, character-rich).
- **Body & Interface:** Google Font **'Plus Jakarta Sans'** or **'Inter'** (ultra-legible, crisp proportions).
- **Monospace Accents:** **'JetBrains Mono'** (timestamps, reading time, category tags, index numbers like `[01]`).

---

## 4. Anti-AI Slop & Visual Craft Principles

1. **No Generic Cards:** Avoid identical 3-column rounded boxes. Use asymmetric layouts, featured hero spans, magazine-style split-screens, and full-bleed visual cards.
2. **Typography-First:** Use oversized headings, tight letter-spacing on display titles, refined uppercase micro-labels, and stylized quotation marks.
3. **Tactile Micro-Interactions:**
   - Smooth hover lifts with refined border glow transitions.
   - Interactive reading progress bar at the top of the viewport.
   - Interactive category pill filters with animated active indicators.
   - Subtle marquee / editorial ticker tape for trending topics.
   - Interactive "Bookmark" & "Like" micro-actions backed by `localStorage`.
4. **Authentic Imagery:** Use high-res, thoughtfully curated or generated visual assets—never empty gray placeholder squares or low-effort SVG shapes.

---

## 5. Page Specifications

### A. Home (`index.html`)
- **Editorial Header:** Sleek navigation bar with logo, navigation links, theme toggle, and search trigger.
- **Top Ticker:** Real-time editorial ticker ("Trending Dispatches // Issue No. 04").
- **Hero Section:** Asymmetric split: oversized featured cover story on the left, top 3 curated readings on the right.
- **Category Explorer:** Fast horizontal chip filter (Culture, Tech, Architecture, Philosophy, Design).
- **Recent Articles Grid:** Varied aspect ratio magazine cards with category badge, reading time, and author avatar.
- **Newsletter Manifesto:** Distinctive subscriber section with dynamic validation.
- **Footer:** Colophon, directory sitemap, social links, and copyright.

### B. About (`about.html`)
- **The Manifesto:** Bold narrative about Marvy's mission and editorial standards.
- **Key Metrics / Stats Bar:** Numbers that build trust (e.g., 250+ Articles, 45k Readers, 0% AI-generated filler).
- **The Editorial Board / Writers:** Profile cards with bio, social handles, and areas of focus.
- **Publication Values:** Asymmetric grid of core values (Depth over Speed, Tactile Craft, Unbiased Perspectives).

### C. Blogs (`blogs.html`)
- **Interactive Search & Filter Suite:** Live keyword search, category filter, and sorting (Newest, Most Read, Short Reads).
- **Layout Switcher:** Grid view vs. Compact list view.
- **Post Reader Modal / View:** Rich reader drawer or full reading page preview with table of contents, author notes, and interactive reaction buttons.
- **Dynamic Pagination / Load More:** Seamless expansion of articles.

### D. Contact (`contact.html`)
- **Inquiry Type Selector:** Interactive chips (Editorial Pitch, General Inquiry, Partnership, Feedback).
- **Modern Form Fields:** Floating or bottom-bordered minimalist inputs with instant feedback.
- **Direct Contacts & Social Hub:** Direct email, office location/timezone, social handles with custom hover cards.
- **Interactive Toast Notification:** Responsive feedback when a message is submitted.

---

## 6. Implementation Standards & Rules

- **Zero Inline Styles:** All styling strictly encapsulated in `style/style.css` and `style/variables.css`.
- **Responsive by Design:** Seamless experience across mobile (< 640px), tablet (640px - 1024px), and desktop (> 1024px).
- **Accessibility:** Use proper ARIA attributes, semantic elements, semantic contrast ratios, and keyboard focus rings.
- **Code Cleanliness:** Well-commented sections, semantic naming conventions (BEM-inspired), no orphan console logs.