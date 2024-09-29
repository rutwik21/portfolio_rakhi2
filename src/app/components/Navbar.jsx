'use client';
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import {useScrollPosition} from './ScrollPosition';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { cn } from '../lib/utils';

function Navbar() {
    const NAVITEMS = [
        { label: 'Home', link: '/' },
        { label: 'Services', link: '/#Services' },
        // { label: 'Projects', link: '/projects' },
        { label: 'About', link: '/#About' },
        { label: 'Contact', link: '/#Contact' },

    ];
    const scrollPosition = useScrollPosition()

  return (
    <nav className={cn(
        scrollPosition > 100 ? 'bg-black' : 'bg-transparent',
        ' transition-all w-full z-50 fixed top-0',
      )}>
    <MaxWidthWrapper >
        <div >
            <div className='w-full flex justify-between items-center py-6 '>
                <h2 className=' font-sans font-thin text-3xl'>Krushna<span className=' text-purple-500'>.</span></h2>
                <div className='hidden md:flex gap-6 items-center'>
                    {NAVITEMS.map(item=>{
                        if(item.label=='Contact'){
                            return (
                                <a href={item.link} key={item.label} >
                                    <HoverBorderGradient containerClassName="rounded-full" as="button"
                                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                    >
                                        <span className='text-lg'>{item.label}</span>
                                    </HoverBorderGradient>
                                    
                                </a>
                            )
                        }
                        return (
                            <a href={item.link} key={item.label} 
                                className='text-lg cursor-pointer text-white hover:border-b-4 hover:border-b-purple-500 '>
                                {item.label}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </MaxWidthWrapper>

    </nav>
  )
}

export default Navbar