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

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
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
  );
}
