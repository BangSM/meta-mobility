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
  title: "Meta Mobility l Beyond Diagnostics.",
  description: "Meta Mobility l Beyond Diagnostics.",
  keywords: ["Meta Mobility", "Carbon Zero", "Innovative Startup", "전기차", "메타모빌리티"],
  openGraph: {
    title: "Meta Mobility",
    description: "Meta Mobility l Beyond Diagnostics.",
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
    <>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <main className="min-w-[1024px] max-w-[1920px] mx-auto">{children}</main>
        </body>
      </html>
    </>
  )
}
