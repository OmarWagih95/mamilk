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
import AnnouncmentBar from "./components/AnnouncmentBar";
import { ModalProvider } from "./context/ModalContext";
import ProductModal from "./components/ProductModal";

export const testFont = localFont({
  src: "/fonts/Dangrek-Regular.ttf",
});
export const Gluten = localFont({
  src: "/fonts/Gluten.ttf",
});
export const Genos = localFont({
  src: "/fonts/Genos.ttf",
});
export const Baskerville = localFont({
  src: "/fonts/LibreBaskerville-Regular.ttf",
});
export const Berkishire = localFont({
  src: "/fonts/BerkshireSwash-Regular.ttf",
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
        className={`${Baskerville.className} bg-white w-screen overflow-x-hidden antialiased`}
      >
                <SplashScreen /> {/* Add the splash screen component */}
                <CartProvider>
                <ModalProvider>
                <ProductModal /> {/* Add the product modal component */}
<UserProvider>

                <WishListProvider>
                  <AnnouncmentBar/>
        <Navbar/>
        {children}
                </WishListProvider>
        <Footer />  
</UserProvider>
                </ModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
