import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tamir Shklaz",
  description:
    "3x startup founder (ex YC) & full-stack engineer with 6+ years of experience and a proven track record of building products that scale to millions",
  icons: {
    icon: "favicon.ico", // Path to your favicon
  },
  openGraph: {
    images: [
      {
        url: "og_image.png",
        width: 1200,
        height: 630,
        alt: "Tamir Shklaz",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <section className={""}>{children}</section>
      </body>
    </html>
  )
}
