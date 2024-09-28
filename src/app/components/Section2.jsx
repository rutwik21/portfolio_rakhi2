import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

function Section2() {
  return (
    <MaxWidthWrapper>
        <div className='flex flex-col justify-center items-center text-center mt-8 min-h-svh'>
            <div >
                <p className='text-purple-500 font-thin text-lg uppercase'>How can I help?</p>
                <p className='text-white text-5xl font-medium my-6'>Your Path to Success Starts Here</p>
                <div className=''>
                    <p className='opacity-60 text-lg'>Let’s get you the info you’re looking for.</p>
                    <p className='text-lg'>Which of these options sounds most like you?</p>
                </div>
            </div>
            <div className='md:flex gap-5 mt-8 '>
                <div className='min-h-[60svh] p-5 bg-card-gradient rounded-xl justify-center items-center w-72 md:w-[30svw] max-w-[400px]'>
                    <div className='relative h-52'>
                      <img className='absolute right-20 top-8 w-[6svw] h-[6svw]' src='instaLogo.gif'/>
                      <video className='absolute right-32 top-10 w-[10svw] h-[10svw]'  autoPlay loop muted>
                        <source  src='instaPhone.webm' itemType='video/webm' />
                      </video>
                    </div>
                    <div className='mt-5 text-center flex flex-col justify-center'>
                        <h3 className='font-semibold text-3xl'>Instagram Revamp</h3>
                        <p className='mt-6 text-wrap'>
                          Wanna grow your business on Instagram without spending on ads?<br />
                          Ready to build a brand that stands out?<br />
                          Ready to turn followers into loyal customers?<br /><br />
                          Let’s make your Instagram a lead-generating powerhouse!<br />
                        </p>
                        <div className='mt-5 flex justify-center'>
                          
                          <HoverBorderGradient containerClassName="rounded-5" as="button"
                              className="dark:bg-black w-[100%] text-center bg-white text-black dark:text-white flex items-center space-x-2"
                              >
                              <span className='text-lg'>Know More</span>
                          </HoverBorderGradient>
                        </div>
                    </div>
                </div>
                <div className='min-h-[60svh] p-5 bg-card-gradient rounded-xl justify-center items-center w-72 md:w-[30svw] max-w-[400px]'>
                    <div className='relative h-52'>
                    <video className='absolute right-14 top-28 w-[5svw] h-[6svw]'  autoPlay loop muted>
                        <source  src='linkdinLogo.webm' itemType='video/webm' />
                      </video>
                      {/* <img className='absolute right-20 top-8 w-[6svw] h-[6svw]' src='linkdinLogo.gif'/> */}
                      <video className='absolute right-32 top-10 w-[10svw] h-[10svw]'  autoPlay loop muted>
                        <source  src='linkdinBoost.webm' itemType='video/webm' />
                      </video>
                    </div>
                    <div className='mt-5 text-center flex flex-col justify-center'>
                        <h3 className='font-semibold text-3xl'>LinkedIn Boost</h3>
                        <p className='mt-6 text-wrap'>
                          Want to build your brand on LinkedIn?<br />
                          Looking to generate leads organically?<br />
                          Ready for real growth in your professional network?<br /><br />
                          I’ll help you transform your LinkedIn profile into a magnet for opportunities!<br />
                        </p>
                        <div className='mt-5 flex justify-center'>
                          
                          <HoverBorderGradient containerClassName="rounded-5" as="button"
                              className="dark:bg-black w-[100%] text-center bg-white text-black dark:text-white flex items-center space-x-2"
                              >
                              <span className='text-lg'>Know More</span>
                          </HoverBorderGradient>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </MaxWidthWrapper>
  )
}

export default Section2