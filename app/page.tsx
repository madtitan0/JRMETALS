"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Chatbot from "@/components/Chatbot";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Projects from "@/components/sections/Projects";
import Technology from "@/components/sections/Technology";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import WhyJR from "@/components/sections/WhyJR";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const done = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onComplete={done} />
      {loaded && (
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Stats />
            <About />
            <Products />
            <WhyJR />
            <Gallery />
            <Projects />
            <Technology />
            <Team />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </SmoothScrollProvider>
      )}
    </>
  );
}
