import Image from "next/image";
import Hero from "./components/sections/Hero";
import Mummies from "./components/sections/Mummies";
import ShopByCategories from "./components/sections/ShopByCategories";
import MessageFromTheOwners from "./components/sections/MessageFromTheOwners";
import HeroCarousel from "./components/sections/HeroCarousel";
import PrismaCarousel from "./components/sections/PrismaCarousel";
import CollectionsList from "./components/CollectionsList";
import { AutoplayCarousel } from "./components/embla/AutoplayCarousel";
import EmblaCarousel from "./components/embla/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarouselAutoScroll from "./components/embla/EmblaCarouselAutoScroll";
import MoreToShop from "./components/sections/MoreToShop";
import HeroCarouselPL from "./components/sections/HeroCarouselPL";
import BestSellers from "./components/sections/BestSellers";
import { ModalProvider } from '../app/context/ModalContext'
import ProductModal from './components/ProductModal'
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
        {/* Meta Pixel Script */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
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
              `,
              }}
              />
              <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1054693372933429&ev=PageView&noscript=1"
            />
            </noscript> */}

    <div className="flex min-w-full overflow-x-hidden w-full bg-transparent flex-col items-center pt-14 justify-center h-auto min-h-screen ">
      {/* <Hero/> */}
      {/* <PrismaCarousel/> */}
      <HeroCarouselPL/>
      <CollectionsList/>
      <BestSellers/>
      <MessageFromTheOwners/>
      <MoreToShop/>
      {/* <AutoplayCarousel/> */}
      {/* <EmblaCarousel slides={[0, 1, 2, 3, 4]} options={{ loop: true }} /> */}
      {/* <Mummies/> */}

    </div>
    </>
  );
}
