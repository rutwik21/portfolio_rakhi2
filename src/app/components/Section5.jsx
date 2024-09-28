'use client'
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";


function Section5() {
  const WORDS = ['Hey there!', 'Hello,', 'Namaste,' ,'Hola!', 'Ciao,']
  return (
    <MaxWidthWrapper>
        <div className='md:flex md:gap-14 w-full min-h-svh text-white relative z-10 mt-24 items-center justify-center bg-transparent'>
        <div className='one-edge-shadow font-thin'>
            <h2 className='text-5xl -ms-2 leading-[3.5rem]'>I’m here to help you achieve your goals through effective branding and organic growth.</h2> 
            
            <div className='font-sans  text-xl'>
                <p className=' mt-5'>As someone who values authenticity, I understand the challenges of fitting into conventional standards of success. But there’s a better way.</p>

                <p className=' mt-5'>By embracing your true self and sharing your unique story, we can unlock the power of organic growth. Let’s embark on this transformative journey together.</p>
                <p className=' mt-5'>If you’re struggling to attract leads and clients, it’s time to focus on building a brand that resonates. I’ll develop strategies that reflect your values, strengthen your presence, and create lasting connections.</p>


                <p className=' mt-5'>Let’s create a brand that not only brings you fulfillment but also helps your clients thrive. Reach out today, and let’s start this exciting adventure together!</p>
            </div>
            <div className='mt-5'>
                <HoverBorderGradient containerClassName="rounded-5" as="button"
                    className="dark:bg-black w-[100%] text-center bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                    <span className='text-lg'>Work with me!</span>
                </HoverBorderGradient>
            </div>
        </div>
        <img src='/main3.png' className='one-edge-shadow min-w-[30svw] md:max-w-[40svw] max-w-[80svw] ' />
       </div>
    </MaxWidthWrapper>
  )
}

export default Section5