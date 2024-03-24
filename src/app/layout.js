import { Inter } from "next/font/google"
import "./assets/styles/main.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ofek Abramovitch Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
