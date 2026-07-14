

// import { AuthProvider } from '@/context/AuthContext'
// import './globals.css'
// import ForceLightMode from '@/components/ForceLightMode'
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: "Invitation",
//   description: "Voici votre lien d'invitation à notre mariage",
//   openGraph: {
//     title: "Invitation",
//     description: "Voici votre lien  d'invitation à notre mariage",
//     url: "https://moninvitation.vercel.app",
//     type: "website",
//     images: [
//       {
//         url: "https://i.ibb.co/y9bwy52/couple-picture.webp",
//         width: 1200,
//         height: 630,
//         alt: "Description de l'image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Votre Titre pour Twitter",
//     description: "Description pour Twitter",
//     images: ["https://i.ibb.co/y9bwy52/couple-picture.webp"],
//   },
// };
// // URLSearchParams
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="fr" className="force-light-mode" data-mode="light">
//       <head>
//          <link rel="preload" href="/couple.jpg" as="image" />
//         <link rel="preload" href="/wed-day.webp" as="image" />
//         <link rel="preload" href="/ecal.webp" as="image" />
//         <link rel="preload" href="/deco.webp" as="image" />
//         <link rel="preload" href="/fleure-deco.webp" as="image" />
//         <link rel="preload" href="/couple-picture-3.webp" as="image" />
//         {/* Autres balises meta... */}
     
//         <link rel="preload" href="https://i.ibb.co/5WqS64p9/couple-picture-3.webp" as="image" />
//       </head>
//       <body>
        
//         <AuthProvider>{children}</AuthProvider>
//       </body>
//     </html>
//   )
// }

import { AuthProvider } from '@/context/AuthContext'
import ForceLightMode from '@/components/ForceLightMode'
import { Metadata } from 'next';

declare module '*.css';

import './globals.css'

export const metadata: Metadata = {
  title: "Le Couple Kitenge - Noces de Bois",
  description: "À l'occasion de nos noces de bois, nous célébrons avec gratitude cinq années d'amour, de confiance et de fidélité. Voici votre lien d'invitation.",
  openGraph: {
    title: "Le Couple Kitenge - Noces de Bois 🪵",
    description: "À l'occasion de nos noces de bois, nous célébrons avec gratitude cinq années d'amour, de confiance et de fidélité.",
    url: "https://moninvitation.vercel.app",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/yn64gXLN/couple.jpg",
        width: 1200,
        height: 630,
        alt: "Le Couple Kitenge - Noces de Bois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Couple Kitenge - Noces de Bois 🪵",
    description: "Cinq années d'amour, de confiance et de fidélité. Vous êtes invités !",
    images: ["https://i.ibb.co/yn64gXLN/couple.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="force-light-mode" data-mode="light">
      <head>
        <link rel="preload" href="https://i.ibb.co/yn64gXLN/couple.jpg" as="image" />
        <link rel="preload" href="/wed-day.webp" as="image" />
        <link rel="preload" href="/ecal.webp" as="image" />
        <link rel="preload" href="/deco.webp" as="image" />
        <link rel="preload" href="/fleure-deco.webp" as="image" />
        <link rel="preload" href="https://i.ibb.co/5WqS64p9/couple-picture-3.webp" as="image" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}