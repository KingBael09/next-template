import "@/styles/globals.css"

import type { Metadata } from "next"
import type { LayoutProps } from "@/types"
import { Analytics } from "@/util/analytics"
import { Providers } from "@/util/providers"
import { TailwindIndicator } from "@/util/tailwind-indicator"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          {children}
          <Toaster />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
