import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SiteHeader } from "../../components/site-header"
//import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "../../components/theme-provider"
import { siteConfig } from "../../config/site"
import { fontMono, fontSans } from "../../lib/fonts"
import { cn } from "../../lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            `min-h-screen bg-background font-sans antialiased ${fontSans.variable} ${fontMono.variable} `
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
// <html lang="en">
//   <body className={inter.className}>{children}</body>
// </html>
