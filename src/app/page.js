'use client';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Testimonials from './components/Testimonials';
import Section5 from './components/Section5';
import React,{ useEffect } from "react";
import Lenis from 'lenis';

export default function Home() {
  useEffect(() =>{
    window.scrollTo(0, 0)
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

  }, []);
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Section5 />
    </>
  );
}
