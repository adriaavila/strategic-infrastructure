# Brand Identity: servicioscreativos.online
**Vibe:** Technical Precision + Creative Execution  
**Strategy:** Dark-mode first, high-leverage UI, high agency.

---

## 1. Color Palette (The "Architect-Creator" Palette)

Designed for OLED screens and developer-centric aesthetics. Use these hex codes for consistency across web, social, and assets.

| Tone | Hex | Variable | Use Case |
| :--- | :--- | :--- | :--- |
| **Deep Space** | `#0A0A0B` | `--bg-main` | Main background, body canvas. |
| **Electric Violet** | `#8B5CF6` | `--brand-primary` | Main CTAs, logo accents, active states. |
| **Cyber Mint** | `#2DD4BF` | `--brand-secondary` | Success states, highlights, "Live" indicators. |
| **Slate Support** | `#94A3B8` | `--text-muted` | Subtext, borders, grid lines, icons. |
| **Pure White** | `#FFFFFF` | `--text-main` | Headlines, primary body text. |

---

## 2. Tailwind CSS Configuration

Copy and paste this into your `tailwind.config.js` to instantly map the brand colors.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0A0B',
          primary: '#8B5CF6',
          secondary: '#2DD4BF',
          slate: '#94A3B8',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top center, #1E1B4B 0%, #0A0A0B 100%)',
      }
    },
  },
}


## 3. Visual Guidelines
Typography Stack
Primary (Headings): Inter or Geist Sans - Bold, tight tracking (-0.02em).

Technical (Data/Code): JetBrains Mono or Fira Code - Used for small labels and "system" stats.

UI Principles
The 60-30-10 Rule: 60% Deep Space (BG), 30% White/Slate (Text), 10% Electric Violet/Mint (Action).

Borders: Use border-white/10 or border-brand-slate/20 for a subtle, sophisticated "glass" look.

Gradients: Use sparingly. Prefer sharp blocks of color or subtle radial glows (Violet/Mint) behind primary containers to simulate depth.

## 4. Logo Usage
Primary: White text servicioscreativos.online with a Violet . (dot).

Icon: A square with a 45° Cyber Mint diagonal slash against an Electric Violet background.

Generated for: Adrian (Technical Founder)

Goal: Optimize for working product and high-leverage brand perception.