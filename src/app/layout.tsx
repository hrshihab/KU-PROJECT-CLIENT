import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Roboto } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Providers from "@/lib/Providers";
import Navbar from "@/components/shared/Navbar";

// Initialize the Poppins font with the weights you need
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khulna University",
  description: "Official website of Khulna University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <Providers>
      <html lang="en" data-theme="light" className={`${poppins.variable} ${roboto.className}`}>
      <body className={`${poppins.className}`}>
        <Navbar />
        <main className="pt-16 sm:pt-20 lg:pt-24">
          
          <div className="min-h-screen">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  </Providers>
  );
}
