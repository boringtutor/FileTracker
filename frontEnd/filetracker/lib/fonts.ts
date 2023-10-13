// import { Playfair_Display as FontMono, Lato as FontSans } from "next/font/google"
import { Bubblegum_Sans, Lato, Playfair_Display } from "next/font/google"

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export const fontSans = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-play",
})

export const fontMono = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato-mono",
  weight: "400",
})
