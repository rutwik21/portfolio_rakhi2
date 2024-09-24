'use client';
import Hero from './components/Hero';
import Section2 from './components/Section2';
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
    </>
  );
}
