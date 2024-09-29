'use client'
import React from 'react';
// import {AuroraBackground} from './ui/aurora-background';
import MaxWidthWrapper from './MaxWidthWrapper';
import { FlipWords } from './ui/flip-words';

function Hero() {
  const WORDS = ['Hey there!', 'Hello,', 'Namaste,' ,'Hola!', 'Ciao,']
  return (
    <main className='gradient px-5 md:px-0 md:pt-24 min-h-svh pt-28'>
        <MaxWidthWrapper>
        <div className='md:flex md:gap-14 w-11/12 text-white relative z-10 items-center justify-center'>
          <div className='one-edge-shadow md:w-7/12 w-full font-thin'>
            <h2 className='text-3xl -ms-2'><FlipWords words={WORDS}></FlipWords></h2> 
            <h2 className='text-3xl mt-1'>Curious about what I do?</h2> 
            <div className='font-sans  text-lg'>
              <p className=' mt-2'>I supercharge LinkedIn & Instagram profiles</p>
              <p>Craft content that converts and builds buzz</p>
              <p>Generate leads and drive organic growth</p>
              <p>I specialize in developing:</p>

              <p className=' mt-2'>Personal Brands: <span className='opacity-60'>Shine in your niche and stand out.</span> </p>
              <p>Product Brands: <span className='opacity-60'>Create buzz and boost sales.</span></p>
              <p>Business Brands: <span className='opacity-60'>Build a strong, memorable presence.</span></p>
              <p>The best part? I transform your social media in just 90 days, </p>
              <p>turning it into a lead magnet machine. Perfect for busy </p>
              <p>professionals and growing brands.</p>


              <p className=' mt-2'>Want to see how? Dive in and check out what I can do for you!</p>
            </div>
          </div>
          <img src='/main.png' className='md:w-6/12 w-full one-edge-shadow min-w-40  ' />
        </div>
        </MaxWidthWrapper>
      {/* <AuroraBackground className='relative overflow-hidden'>
      </AuroraBackground> */}
    </main>
  )
}

export default Hero