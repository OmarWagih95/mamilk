import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./CartProvider";
import WishListProvider from "./WishListProvider";
import Footer from "./components/sections/Footer";
import SplashScreen from "./components/sections/SplashScreen";
import UserProvider from "./UserProvider";

export const testFont = localFont({
  src: "/fonts/Dangrek-Regular.ttf",
});
export const Gluten = localFont({
  src: "/fonts/Gluten.ttf",
});
export const Genos = localFont({
  src: "/fonts/Genos.ttf",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "MAMILK",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Genos.className} bg-pink1 w-screen overflow-x-hidden antialiased`}
      >
                <SplashScreen /> {/* Add the splash screen component */}
<UserProvider>

                <CartProvider>
                <WishListProvider>
        <Navbar/>
        {children}
                </WishListProvider>
        </CartProvider>
        <Footer />  
</UserProvider>
      </body>
    </html>
  );
}
