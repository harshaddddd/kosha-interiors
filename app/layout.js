import '../styles/globals.css'

export const metadata = {
  title: 'Kosha Interiors — Interior Design & Turnkey Renovation in Pune',
  description:
    "Pune's highest-rated woman-owned interior design studio. Beautiful 2BHK & 3BHK transformations with transparent budgeting and seamless execution. 4.9★ on Google.",
  keywords:
    'interior designer Dhanori Pune, 3BHK interior design Pune, 2BHK interior design Pune, turnkey home renovation Pune, Kosha Interiors Vrushali',
  openGraph: {
    title: "Kosha Interiors — Pune's Highest-Rated Interior Studio",
    description:
      'Transforming Pune homes with elegant, on-budget design. 4.9★ rating · Women-owned · Transparent pricing.',
    url: 'https://koshainteriors.in',
    siteName: 'Kosha Interiors',
    locale: 'en_IN',
    type: 'website',
  },
}

// LocalBusiness + AggregateRating JSON-LD
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesigner',
  name: 'Kosha Interiors',
  description:
    "Pune's highest-rated woman-owned interior design studio specialising in 2BHK and 3BHK turnkey home renovation.",
  url: 'https://koshainteriors.in',
  telephone: '+917700071665',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dhanori',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411015',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5897,
    longitude: 73.9143,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '18',
    bestRating: '5',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />

        {/* Google Tag Manager — replace GTM-XXXXXXX with real ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        <meta name="theme-color" content="#2C3E38" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
