"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HoverButton from "../HoverButton";
import axios from "axios";
import { CldImage } from "next-cloudinary";

const HeroCarousel = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const [slides, setSlides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get("/api/hero-carousel");
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching carousel slides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideClick = (path: string) => {
    console.log("Clicked path:", path); // Debug log
    if (path) {
      router.push(path);
    }
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full mt-10 aspect-square md:aspect-video"
      data-carousel="slide"
    >
      {/* <div id="default-carousel" className="relative w-full h-[55vh] md:h-[calc(100vh-56px)]"  data-carousel="slide"> */}
      <div className="relative w-full h-full ">
        {loading ? (
          <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
             <span className="text-gray-400">Loading carousel...</span>
          </div>
        ) : (
          slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Desktop Image */}
              <div className="relative w-full hidden md:block">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <div className="w-full h-full">
                    <CldImage
                      src={slide.desktopImage}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      alt={`Slide ${index + 1}`}
                      priority={index === activeIndex}
                    />
                  </div>
                  <div
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{
                      top: slide.desktopPosition?.top || "50%",
                      left: slide.desktopPosition?.left || "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <HoverButton href={slide.path} text={slide.title} />
                  </div>
                </div>
              </div>
              {/* Mobile Image */}
              <div className="relative aspect-square md:hidden">
                <div className="relative w-full" style={{ paddingTop: "100%" }}>
                  <div className="w-full h-full">
                    <CldImage
                      src={slide.mobileImage}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      alt={`Slide ${index + 1}`}
                      priority={index === activeIndex}
                    />
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    top: slide.mobilePosition?.top || "50%",
                    left: slide.mobilePosition?.left || "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <HoverButton href={slide.path} text={slide.title} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Carousel navigation dots */}
      <div className="absolute z-30 flex gap-3 bottom-[50%] right-4 md:right-8 transform flex-col -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
