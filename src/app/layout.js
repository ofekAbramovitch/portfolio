import { Inter } from "next/font/google"
import './globals.css'
import "./assets/styles/main.scss"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ofek Abramovitch Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content="Ofek Abramovitch Portfolio" />
        <meta property="og:image" content="https://res.cloudinary.com/ofekabramovitch/image/upload/v1711829505/dlxb8x59l7kytj5jg5a2.png" />
        <meta property="og:url" content="https://ofek-abramovitch-portfolio.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" sizes="50x50" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
