import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import { Providers } from "./components/providers"
import { cn } from "@/utils"

import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Bishop England Spanish Club | Habla. Conecta. Descubre.",
  description: "A student-led community for Spanish language, culture, and real experiences at Bishop England High School. Come as you are — you only need to be curious.",
  icons: [
    { rel: "icon", url: "/besc.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/besc.png" },
  ],
  openGraph: {
    title: "Bishop England Spanish Club",
    description: "Habla. Conecta. Descubre. Spanish is more than a class.",
    siteName: "Bishop England Spanish Club",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, sourceSerif.variable)}>
      <body className="font-sans bg-[#F6F4EF] text-[#0A163C] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
