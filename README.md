# PixelCraft Studio — Design Agency Homepage

A modern, editorial-style design agency landing page built with **Next.js 14** and **Tailwind CSS**.

## ✨ Features

- **4 Sections**: Hero, Services, Portfolio, Contact
- **Dark Mode Toggle** with localStorage persistence
- **Scroll Reveal Animations** using IntersectionObserver
- **Form Validation** with success state
- **Next.js Image optimization** for portfolio images
- **SEO Metadata** via Next.js App Router `metadata` export
- **Fully Responsive** — mobile, tablet, desktop
- **Grain texture overlay** for editorial aesthetic
- **Custom Google Fonts**: Cormorant Garamond + DM Sans

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| React 18 | UI Library |
| Tailwind CSS v3 | Styling |
| Google Fonts | Typography |

## 📁 Folder Structure

```
pixelcraft/
├── app/
│   ├── layout.js        # Root layout + SEO metadata
│   └── page.js          # Main page (assembles sections)
├── components/
│   ├── Navbar.jsx        # Navigation + dark mode toggle
│   ├── Hero.jsx          # Hero section
│   ├── Services.jsx      # Services cards grid
│   ├── Portfolio.jsx     # Portfolio projects grid
│   ├── Contact.jsx       # Contact form with validation
│   └── Footer.jsx        # Footer
├── public/
│   └── images/
├── styles/
│   └── globals.css       # Global styles + Tailwind directives
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone or download the project
cd pixelcraft

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment (Vercel)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live in ~60 seconds

## 🎨 Design Choices

- **Color Palette**: Cream (`#F5F0E8`) / Ink (`#0A0A0F`) / Accent Orange (`#E8572A`)
- **Typography**: Cormorant Garamond (display/headings) + DM Sans (body)
- **Aesthetic**: Editorial luxury — inspired by high-end design magazines
- **Dark Mode**: Inverted palette, persisted via localStorage

## 📝 Assumptions & Additional Features

- Portfolio images sourced from Unsplash (no API key needed)
- Contact form simulates submission (no backend) — can be wired to Formspree, Resend, etc.
- Dark mode state is saved between page visits
- Grain texture overlay adds organic depth without heavy assets
