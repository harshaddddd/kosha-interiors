import '../styles/globals.css'

export const metadata = {
  title: "Kosha Interiors — Interior Design & Turnkey Renovation in Pune",
  description: "Pune's highest-rated woman-owned interior design studio. Beautiful 2BHK & 3BHK transformations with transparent budgeting and seamless execution. 4.9 on Google.",
  keywords: "interior designer Dhanori Pune, 3BHK interior design Pune, 2BHK interior design Pune, turnkey home renovation Pune, Kosha Interiors",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Kosha Interiors",
  description: "Pune highest-rated woman-owned interior design studio specialising in 2BHK and 3BHK turnkey home renovation.",
  url: "https://koshainteriors.in",
  telephone: "+917700071665",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dhanori",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411015",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "18",
    bestRating: "5",
  },
  priceRange: "₹₹",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Cabinet+Grotesk:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <meta name="theme-color" content="#0D0D0D" />
      </head>
      <body>{children}</body>
    </html>
  )
}
