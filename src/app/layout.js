import { Inter } from "next/font/google"
import "./assets/styles/main.scss"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ofek Abramovitch Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="50x50" href="public/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
