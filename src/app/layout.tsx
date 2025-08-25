import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Meta Mobility",
  description: "An innovative startup idea for achieving carbon zero",
  keywords: ["Meta Mobility", "Carbon Zero", "Innovative Startup", "전기차", "메타모빌리티"],
  openGraph: {
    title: "Meta Mobility",
    description: "An innovative startup idea for achieving carbon zero",
    images: "https://meta-mobility.io/img_section_4.png",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
