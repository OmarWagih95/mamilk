import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./CartProvider";
import WishListProvider from "./WishListProvider";
import Footer from "./components/sections/Footer";
import SplashScreen from "./components/sections/SplashScreen";

export const testFont = localFont({
  src: "/fonts/Shafarik-Regular.ttf",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAMILK",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${testFont.className} w-screen overflow-x-hidden antialiased`}
      >
                <SplashScreen /> {/* Add the splash screen component */}

                <CartProvider>
                <WishListProvider>
        <Navbar/>
        {children}
                </WishListProvider>
        </CartProvider>
        <Footer />  
      </body>
    </html>
  );
}
