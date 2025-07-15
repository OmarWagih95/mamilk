import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WishListProvider from "./WishListProvider";
import Footer from "./components/sections/Footer";
import SplashScreen from "./components/sections/SplashScreen";
import UserProvider from "./UserProvider";
import AnnouncmentBar from "./components/AnnouncmentBar";
import { ModalProvider } from "./context/ModalContext";
import ProductModal from "./components/ProductModal";
import { CartProvider } from "./context/cartContext";
import Script from "next/script";

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
      <head>
        {/* You can add other meta tags here if needed */}
      </head>
      <body
        className={`${Baskerville.className} bg-white w-screen overflow-x-hidden antialiased`}
      >
        {/* Facebook Pixel Script */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1054693372933429');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1054693372933429&ev=PageView&noscript=1"
          />
        </noscript>
        <SplashScreen /> {/* Add the splash screen component */}
        <CartProvider>
          <ModalProvider>
            <ProductModal /> {/* Add the product modal component */}
            <UserProvider>
              <WishListProvider>
                <AnnouncmentBar />
                <Navbar />
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
