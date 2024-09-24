import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';

function Section2() {
  return (
    <MaxWidthWrapper>
        <div className='flex flex-col justify-center items-center text-center h-svh'>
            <div >
                <p className='text-purple-500 font-thin text-lg uppercase'>How can I help?</p>
                <p className='text-white text-5xl font-medium my-6'>Your Path to Success Starts Here</p>
                <div className=''>
                    <p className='opacity-60 text-lg'>Let’s get you the info you’re looking for.</p>
                    <p className='text-lg'>Which of these options sounds most like you?</p>
                </div>
            </div>
            <div className='md:flex gap-5'>
                
            </div>
        </div>

    </MaxWidthWrapper>
  )
}

export default Section2