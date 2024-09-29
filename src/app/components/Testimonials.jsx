'use client'
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Compare } from "../components/ui/compare";
import { Star } from "lucide-react";

function Testimonials() {
  return (
    <MaxWidthWrapper className='px-5 md:px-0 min-h-svh pt-20 place-content-center'>
        <div className="p-4 border md:flex justify-center mt-5 gap-5 rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
            <div className='place-content-center md:w-5/12'>
                <div className='flex items-center gap-1 align-middle'>

                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>

                </div>
                <p className='w-11/12 my-5 '>"Krushna's timing, expertise, and our existing connection made her offer irresistible. 
                    Her proven track record and social proof gave me the confidence to trust her with my Instagram growth.<br /><br />
                    In just the first month, Krushna's strategies delivered outstanding results. 
                    I'm now entering the second month with complete satisfaction and excitement. 
                    If you're looking for someone who truly understands social media and delivers exceptional results, 
                    Krushna is the real deal."</p>

                <h3 className='font-semibold text-xl text-purple-500'>Rutwik Kashid</h3>
                <p className='text-gray-500'>Freelance web devloper</p>
            </div>
            <div className='flex mt-4 md:mt-0 items-center align-middle'>
                <Compare
                    firstImage="beforeLinkdin.png"
                    secondImage="afterLinkdin.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </div>
        </div>
        <div className="p-4 md:flex justify-center mt-16 gap-20 ">
            <div className='flex items-center align-middle'>
                <video controls className='w-full md:w-11/12 h-[70svh] border rounded-2xl' >
                    <source src='deveshiTestimonial.mp4' />
                </video>
            </div>
            <div className='place-content-center mt-5 md:mt-0 w-full md:w-5/12'>
                <div className='flex items-center gap-1 align-middle'>

                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>
                    <Star className='text-purple-500'/>

                </div>
                <p className='w-11/12 my-5 '>"Krushna's timing, expertise, and our existing connection made her offer irresistible. 
                    Her proven track record and social proof gave me the confidence to trust her with my Instagram growth.<br /><br />
                    In just the first month, Krushna's strategies delivered outstanding results. 
                    I'm now entering the second month with complete satisfaction and excitement. 
                    If you're looking for someone who truly understands social media and delivers exceptional results, 
                    Krushna is the real deal."</p>

                <h3 className='font-semibold text-xl text-purple-500'>Deveshi Harjani</h3>
                <p className='text-gray-500'>Entrepreneur</p>
            </div>
            
        </div>
        
    </MaxWidthWrapper>
  )
}

export default Testimonials