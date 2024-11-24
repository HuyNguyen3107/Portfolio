"use client";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import useBlobity from "./components/blobity/useBlobity.ts";
import PreLoader from "./components/other/PreLoader.tsx";

import Blur from "./components/overlay/Blur.tsx";
import Color from "./components/overlay/Color.tsx";

import About from "./sections/About.tsx";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Tools from "./sections/Tools.tsx";
import Work from "./sections/Work";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffectOnce(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setIsMobile(window.innerWidth < 768);
  });

  useEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

  useBlobity({
    licenseKey: "opensource",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#ffffff",
    zIndex: 35,
    size: 50,
    radius: 5,
    magnetic: false,
  });

  return (
    <>
      <PreLoader />
      <Blur />
      <Color />
      <NavBar />
      <main className="flex flex-col items-center justify-center bg-black">
        <Hero />
        <About />
        <Work />
        <Tools />
        <Contact />
        <Footer />
      </main>
    </>
  );
}