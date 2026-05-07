# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate marketing website for **DGlobal Technology** — a Vietnamese tech company offering enterprise solutions, telecom services, digital banking, payment gateways, e-commerce, and AI solutions.

**Stack:** Vanilla HTML5 + CSS3 + JavaScript (no build step, no framework)

---

## Development Commands

Serve the site locally (required before taking screenshots):
```bash
npx serve . -p 8080
```

Take a screenshot for design comparison:
```bash
npx capture-website-cli http://localhost:8080 --output=screenshot_new.png --width=1440 --height=900
# Full-page:
npx capture-website-cli http://localhost:8080 --output=screenshot_new_full.png --full-page
```

---

## Mandatory Rules

### 1. Screenshot & Design Comparison
After every major change (new section, layout shift, important component), take a screenshot and compare it visually against `nodo.vn_.png`. Check:
- Color palette matches (dark navy/blue)
- Spacing and alignment are balanced
- Typography weight/size is correct
- Cards/components match the reference

Fix significant deviations immediately — do not let them accumulate.

### 2. Mobile-First Responsive Design
- Write CSS for mobile first, then add desktop overrides via `@media (min-width: ...)`
- Breakpoints: 375px · 640px · 768px · 1024px · 1280px
- Touch targets minimum 44×44px
- Minimum font size 16px on mobile
- Test with Chrome DevTools responsive mode after every layout change

### 3. Scroll Animations (Mandatory)
Every section must animate on scroll — no fully static sections. The current pattern uses Intersection Observer with CSS transition classes:

```javascript
// Observer setup (copy from index.html)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '-100px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
```

```css
/* CSS side */
.reveal          { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal-left     { opacity: 0; transform: translateX(-40px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal-right    { opacity: 0; transform: translateX(40px);  transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible, .reveal-left.visible, .reveal-right.visible { opacity: 1; transform: none; }
```

Stagger grid/card children with `transition-delay` increments of 0.1s.
Always include `@media (prefers-reduced-motion: reduce) { * { transition-duration: 0s !important; } }`.

---

## File Structure

```
index.html          — Homepage (main entry point, ~2200 lines)
tuyen-dung.html     — Careers/Recruitment page
solutions/
  ai.html           — AI Solutions
  banking.html      — Digital Banking
  ecommerce.html    — E-Commerce
  enterprise.html   — Enterprise Solutions
  payment.html      — Payment Gateway
  telecom.html      — Telecom Services
js/
  i18n.js           — Internationalization system (vi/en/ko/lo)
nodo.vn_.png        — Reference design (dark navy/blue style to match)
screenshot_v*.png   — Previous iteration screenshots for comparison
```

---

## Internationalization

The i18n system lives in `js/i18n.js` (vanilla JS, ~1038 lines).

- Supports 4 languages: **Vietnamese (vi)**, English (en), Korean (ko), Lao (lo)
- HTML elements use `data-i18n="key"` attributes
- Switch language: `window.DGi18n.apply('vi')`
- Language persisted in `localStorage` under key `'dg_lang'`
- Primary language is **Vietnamese (vi)**; all new strings must have translations in all 4 languages

---

## Design System

### Color Palette (CSS Custom Properties)
```css
--bg-primary:    #080D1A   /* deep navy */
--bg-secondary:  #0C1426   /* dark blue */
--bg-card:       #0F1A2E   /* dark slate */
--accent:        #2563EB   /* electric blue — CTAs */
--accent-hover:  #60A5FA   /* lighter blue */
--highlight:     #06B6D4   /* cyan — AI/tech highlights */
--text-primary:  #F1F5F9   /* near white */
--text-secondary:#94A3B8   /* muted gray */
--border:        #1E2D45   /* subtle dark border */
```

### Typography
- **Headings:** Inter or Plus Jakarta Sans — Bold/SemiBold (via Google Fonts CDN)
- **Body:** Inter — Regular/Medium
- **Code/Tech labels:** JetBrains Mono
- Scale: Display (56px) → H1 (40px) → H2 (32px) → H3 (24px) → Body (16px) → Small (14px)

### Spacing & Layout
- Max content width: `1200px`, centered
- Section vertical padding: `80px` desktop / `48px` mobile
- Border radius: `12px` cards, `8px` buttons
- Shadows: `0 0 24px rgba(37, 99, 235, 0.15)`
- Icons: Lucide (loaded via CDN `https://unpkg.com/lucide@latest/dist/umd/lucide.js`)

### Component Style
- Dark glass-morphism cards (`backdrop-filter: blur`)
- Gradient borders on featured cards
- Buttons: filled primary (blue), outlined secondary, ghost

---

## Homepage Sections

1. **Navbar** — Logo left, nav links center, CTA right. Sticky with blur on scroll.
2. **Hero** — Full-width dark BG, headline + dual CTA + SVG orbit animation.
3. **Stats Bar** — Years of experience, clients, products, uptime SLA.
4. **Solutions Grid** — 6-card grid (icon + title + 1-line description + arrow).
5. **AI Spotlight** — Chatbot, Callbot, Agentic AI suite highlight.
6. **Why DGlobal** — 3–4 differentiators.
7. **Clients/Logos** — Horizontal scroll of partner logos.
8. **Testimonials** — 2–3 quote cards.
9. **CTA Banner** — Contact prompt.
10. **Footer** — Logo, nav links, social links, legal text.
11. **Floating hotline button** — Pulse animation, bottom-right.

---

## Solutions & Products

| ID | Vietnamese | English | Description |
|----|-----------|---------|-------------|
| enterprise | Giải pháp doanh nghiệp | Enterprise Solutions | ERP, CRM, workflow automation |
| telecom | Dịch vụ viễn thông | Telecom Services | VoIP, MVNO, SMS/OTP gateway |
| banking | Ngân hàng số | Digital Banking | Core banking, open banking APIs, KYC/eKYC |
| payment | Cổng thanh toán | Payment Gateway | Multi-channel, QR Pay, BNPL |
| ecommerce | Thương mại điện tử | E-Commerce | B2B/B2C platforms, marketplace integrations |
| ai | Giải pháp AI | AI Solutions | Chatbot, Callbot, Agentic AI suite |

### AI Products
| Product | Description |
|---------|-------------|
| Chatbot | Multi-channel customer support (web, Zalo, FB Messenger) |
| Callbot | AI voice bot for inbound/outbound calls, IVR replacement |
| Database Agent | Natural language to SQL |
| Report Agent | Auto-generate business reports from raw data |
| ITS Agent | Intelligent IT support — ticket triage, knowledge base |
| KDB Agent | AI-powered internal knowledge management and Q&A |

---

## SEO Defaults
```
title       : "DGlobal — Giải pháp Công nghệ Toàn diện"
description : "DGlobal cung cấp giải pháp doanh nghiệp, viễn thông, ngân hàng số, cổng thanh toán, thương mại điện tử và AI cho doanh nghiệp Việt Nam."
keywords    : "giải pháp doanh nghiệp, ngân hàng số, chatbot AI, callbot, agentic AI, cổng thanh toán, DGlobal"
```

## Company Info
- **Name:** DGlobal Technology Joint Stock Company
- **Tagline:** "Giải pháp công nghệ toàn diện cho doanh nghiệp số"
- **Phone:** 0981 100 001
- **Social:** LinkedIn, Facebook, YouTube
