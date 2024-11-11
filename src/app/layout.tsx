import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/toaster";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Holidaze",
  description:
    "Holidaze is a platform for discovering and booking unique venues for your next stay.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${montserrat.className} max-w-screen overflow-x-hidden`}
        >
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen text-foreground bg-background">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
