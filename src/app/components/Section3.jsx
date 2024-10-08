'use client'
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import {Check} from 'lucide-react';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

function Section3() {
  return (
    <MaxWidthWrapper className='bg-gradient-circle'>
    <div id='About' className='md:flex md:gap-14 w-full min-h-svh p-5 md:p-0 text-white relative z-10 md:mt-24 items-center justify-center bg-transparent'>
        <img src='/main2.png' className='one-edge-shadow w-full md:w-5/12 md:max-w-[40svw] max-w-[80svw] ' />
        
        <div className='one-edge-shadow w-full md:w-7/12 font-thin'>
            <h2 className='text-3xl'>Hey there!</h2> 
            <h2 className='text-3xl mt-2 text-gradient '>I’m Krushna, your go-to for building brands and growing your online presence!</h2> 
            <div className='font-sans  text-lg'>
                <p className=' mt-4'>If you’re struggling to get leads and clients on LinkedIn and Instagram, I’m here to help.</p>
                
                <p>Together, we’ll make social media work for you and boost your brand.I specialize in developing:</p>
                

                <div className='font-semibold text-start mt-4'>
                    <div className="inline-flex text-start w-11/12">
                        <Check className='w-1/12 mt-1 mx-2' /><p className='w-11/12'>Proven Strategies: Let’s grow your followers and get people excited about your brand. </p>
                    </div>
                    <div className="inline-flex text-start w-11/12">
                        <Check className='w-1/12 mt-1 mx-2' /><p className='w-11/12'>Expert Help: I’ll guide you in generating leads and increasing your sales.</p>       
                    </div>
                    <div className="inline-flex text-start w-11/12">
                        <Check className='w-1/12 mt-1 mx-2' /><p className='w-11/12'>Custom Plans: We’ll create a plan that fits your unique business goals.</p>
                    </div>
                    <div className="inline-flex text-start w-11/12">
                        <Check className='w-1/12 mt-1 mx-2' /><p className='w-11/12'>Support When You Need It: I’m here to help you navigate the fast-changing online world.</p>
                    </div>
                </div>
                <p className='mt-4'>The best part? I transform your social media in just 90 days, turning it into a lead magnet machine. Perfect for busy professionals and growing brands.</p>
               
                <p className=' mt-4'>Ready to elevate your brand?
                Let’s connect and make social media work for you!</p>
                <div className='mt-4'>

                    <HoverBorderGradient containerClassName="rounded-5" as="button"
                        className="dark:bg-black w-[100%] text-center bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                        <span className='text-sm'>Work with me!</span>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default Section3