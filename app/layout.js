import '../styles/globals.css'

export const metadata = {
  title:"Kosha Interiors — Interior Design & Turnkey Renovation in Pune",
  description:"Pune's highest-rated woman-owned interior design studio. Beautiful 2BHK & 3BHK transformations. 4.9 stars on Google.",
  keywords:"interior designer Dhanori Pune, 3BHK interior design Pune, turnkey renovation Pune, Kosha Interiors",
}

const schema={
  "@context":"https://schema.org","@type":"InteriorDesigner",
  name:"Kosha Interiors",telephone:"+917700071665",
  address:{"@type":"PostalAddress",addressLocality:"Pune",addressRegion:"Maharashtra",addressCountry:"IN"},
  aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"18",bestRating:"5"},
  priceRange:"₹₹",
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,700;1,300;1,700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
        <meta name="theme-color" content="#0A0A08"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
