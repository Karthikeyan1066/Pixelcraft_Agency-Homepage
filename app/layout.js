import '../styles/globals.css'

export const metadata = {
  title: 'PixelCraft',
  description: 'A boutique design agency specializing in high-impact digital blueprints, precision engineering, and human-centric experiences. Based in San Francisco, serving global visionaries.',
  keywords: ['next.js developer', 'design agency san francisco', 'digital architecture', 'ui/ux design', 'frontend engineering', 'web development', 'branding', 'digital marketing'],
  authors: [{ name: 'PixelCraft Studio' }],
  icons: {
    icon: '/pixel_craft_logo.png',
  },
  openGraph: {
    title: 'PixelCraft Studio',
    description: 'We create beautiful digital experiences for modern brands.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
