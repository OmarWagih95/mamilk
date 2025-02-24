import Image from "next/image";
import Hero from "./components/sections/Hero";
import Mummies from "./components/sections/Mummies";

export default function Home() {
  return (
    <div className="flex min-w-full w-full bg-backgroundColor flex-col items-center pt-14 justify-center h-auto min-h-screen ">
      <Hero/>
      <Mummies/>

    </div>
  );
}
