'use client'
import React from 'react';
import {AuroraBackground} from './ui/aurora-background';
import MaxWidthWrapper from './MaxWidthWrapper';
import { FlipWords } from './ui/flip-words';

function Hero() {
  const WORDS = ['Hey there!', 'Hello,', 'Namaste,' ,'Hola!', 'Ciao,']
  return (
    <main>
      <AuroraBackground className='relative overflow-hidden'>
        <MaxWidthWrapper>
        <div className='md:flex md:gap-14 w-full h-svh text-white relative z-10 mt-24 items-center justify-center bg-transparent'>
          <div className='one-edge-shadow font-thin'>
            <h2 className='text-5xl -ms-2'><FlipWords words={WORDS}></FlipWords></h2> 
            <h2 className='text-5xl mt-2'>Curious about what I do?</h2> 
            <div className='font-sans  text-xl'>
              <p className=' mt-5'>I supercharge LinkedIn & Instagram profiles</p>
              <p>Craft content that converts and builds buzz</p>
              <p>Generate leads and drive organic growth</p>
              <p>I specialize in developing:</p>

              <p className=' mt-5'>Personal Brands: <span className='opacity-60'>Shine in your niche and stand out.</span> </p>
              <p>Product Brands: <span className='opacity-60'>Create buzz and boost sales.</span></p>
              <p>Business Brands: <span className='opacity-60'>Build a strong, memorable presence.</span></p>
              <p>The best part? I transform your social media in just 90 days, </p>
              <p>turning it into a lead magnet machine. Perfect for busy </p>
              <p>professionals and growing brands.</p>


              <p className=' mt-5'>Want to see how? Dive in and check out what I can do for you!</p>
            </div>
          </div>
          <img src='/main.png' className='one-edge-shadow -mt-56 h-[120%] ' />
        </div>
        </MaxWidthWrapper>
      </AuroraBackground>
    </main>
  )
}

export default Hero