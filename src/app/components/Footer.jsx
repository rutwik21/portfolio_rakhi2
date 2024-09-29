import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <MaxWidthWrapper className='my-10'>
        <h2 id='Contact' className='font-sans font-thin text-3xl'>Krushna<span className=' text-purple-500'>.</span></h2>
        <div className='md:flex justify-between my-3'>
            
                <h3 className='text-xl text-purple-500 font-medium tracking-wide'>Feel free to contact me.</h3>
                <div className='md:flex gap-2 text-lg font-thin'>
                   <p>krushnasharma05@gmail.com</p> 
                   <a target='_blank' href='https://www.linkedin.com/in/krushnasharma05'> <Linkedin className=' inline-block mx-1 -mt-1' /> <span className='border-b'>Linkedin</span></a> 
                   <a target='_blank' href='https://www.instagram.com/krushnasharmaofficial/'> <Instagram className=' inline-block mx-1 -mt-1'/> <span className='border-b'>Instagram</span></a> 
                </div>
           
        </div>
        <div className='flex text-sm justify-between'>
            <p className='text-gray-400'>© 2024 Krushna Sharma. All right reserved.</p>
            <p className='text-gray-400'>Designed & Developed by <a className='inline-block border-b' href='https://rut-wik.vercel.app' target='_blank'>Rutwik Kashid</a></p>
        </div>
    </MaxWidthWrapper>
  )
}

export default Footer