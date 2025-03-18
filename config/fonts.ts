import { Nunito as FontNunito } from "next/font/google";

export const fontNunito = FontNunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
  preload: true,
})