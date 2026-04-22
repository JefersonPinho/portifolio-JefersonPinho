# Developer Portfolio — Next.js App Router

A senior-level developer portfolio built with **Next.js 14 App Router**, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Sora (sans) + Fira Code (mono) via Google Fonts
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and set:
- `GITHUB_USERNAME` — your GitHub username (for the repos section)
- `GITHUB_TOKEN` — optional, prevents API rate limiting

### 3. Personalize your content

| File | What to change |
|------|---------------|
| `data/projects.ts` | Your projects |
| `data/skills.ts` | Your skill set |
| `data/experience.ts` | Work history |
| `app/layout.tsx` | SEO metadata, your name |
| `components/layout/navbar.tsx` | Your name/logo |
| `components/layout/footer.tsx` | Social links |
| `components/sections/hero/hero-section.tsx` | Hero copy & links |
| `components/sections/contact/contact-section.tsx` | Contact info |

### 4. Add project images

Place project images in `public/images/projects/`:
- `pinho-nuts.jpg`
- `pastore-dashboard.jpg`
- `portfolio.jpg`

Or update image paths in `data/projects.ts`.

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Design tokens + base styles
│   ├── projects/page.tsx   # All projects page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── ui/                 # Primitive UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── layout/             # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── container.tsx
│   └── sections/           # Page sections
│       ├── hero/
│       ├── about/
│       ├── skills/
│       ├── projects/
│       ├── experience/
│       ├── github/
│       └── contact/
├── data/                   # Static data
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── hooks/                  # Custom React hooks
│   ├── useScroll.ts
│   └── useRevealAnimation.ts
├── lib/                    # Utilities
│   ├── github.ts
│   └── utils.ts
└── types/                  # TypeScript types
    ├── project.ts
    ├── experience.ts
    └── github.ts
```

## Connect a Contact Form

Replace the mock form submission in `components/sections/contact/contact-section.tsx` with a real service:

- **[Resend](https://resend.com)** — Email API (recommended)
- **[Formspree](https://formspree.io)** — Simple form backend
- **[EmailJS](https://emailjs.com)** — Client-side email

## Performance

This project is optimized for Lighthouse scores above 90:

- `next/image` for automatic image optimization
- Google Fonts loaded with `next/font` (zero layout shift)
- Server Components by default (GitHub section)
- `ISR` with `next: { revalidate: 3600 }` for GitHub data
- Semantic HTML and ARIA attributes throughout

## License

MIT
