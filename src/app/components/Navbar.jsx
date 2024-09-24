'use client';
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

function Navbar() {
    const NAVITEMS = [
        { label: 'Home', link: '/' },
        { label: 'Services', link: '/services' },
        { label: 'Projects', link: '/projects' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },

    ]

  return (
    <MaxWidthWrapper >
        <div className='relative fixed-top sticky-top'>
            <div className='w-full flex justify-between items-center fixed-top top-0 absolute z-20 py-6 '>
                <h2 className=' font-sans font-thin text-5xl'>Krushna<span className=' text-purple-500'>.</span></h2>
                <div className='hidden md:flex gap-6 items-center'>
                    {NAVITEMS.map(item=>{
                        if(item.label=='Contact'){
                            return (
                                <a href={item.link} key={item.label} >
                                    <HoverBorderGradient containerClassName="rounded-full" as="button"
                                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                    >
                                        <span className='text-2xl'>{item.label}</span>
                                    </HoverBorderGradient>
                                    
                                </a>
                            )
                        }
                        return (
                            <a href={item.link} key={item.label} 
                                className='text-2xl cursor-pointer text-white hover:border-b-4 hover:border-b-purple-500 '>
                                {item.label}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Navbar