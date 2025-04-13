import Image from "next/image";
import Hero from "./components/sections/Hero";
import Mummies from "./components/sections/Mummies";
import ShopByCategories from "./components/sections/ShopByCategories";
import MessageFromTheOwners from "./components/sections/MessageFromTheOwners";
import HeroCarousel from "./components/sections/HeroCarousel";
import PrismaCarousel from "./components/sections/PrismaCarousel";
import CollectionsList from "./components/CollectionsList";
export default function Home() {
  return (
    <div className="flex min-w-full w-full bg-transparent flex-col items-center pt-14 justify-center h-auto min-h-screen ">
      {/* <Hero/> */}
      {/* <PrismaCarousel/> */}
      <HeroCarousel/>
      <CollectionsList/>
      <ShopByCategories/>
      <MessageFromTheOwners/>
      {/* <Mummies/> */}

    </div>
  );
}
