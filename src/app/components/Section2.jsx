import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

function Section2() {
  return (
    <MaxWidthWrapper>
        <div id='Services' className='flex flex-col md:w-full px-5 md:px-0 justify-center items-center text-center py-8 min-h-svh'>
            <div >
                <p className='text-purple-500 font-thin text-base uppercase mt-5'>How can I help?</p>
                <p className='text-white text-4xl font-medium my-3'>Your Path to Success Starts Here</p>
                <div className=''>
                    <p className='opacity-60 text-base'>Let’s get you the info you’re looking for.</p>
                    <p className='text-base'>Which of these options sounds most like you?</p>
                </div>
            </div>
            <div className='md:flex gap-5 mt-8 '>
                <div className='min-h-[60svh] p-5 pb-10 bg-card-gradient rounded-xl justify-center items-center w-72 md:w-[30svw] max-w-[400px]'>
                    <div className='relative h-52'>
                      <img className='absolute md:right-20 right-10 top-8 w-[25svw] h-[20svh] md:w-[6svw] md:h-[6svw]' src='instaLogo.gif'/>
                      <video className='absolute md:right-32 right-16 top-10 md:w-[10svw] md:h-[10svw]'  autoPlay loop muted>
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
                              <a href='/Instagram' className='text-lg'>Know More</a>
                          </HoverBorderGradient>
                        </div>
                    </div>
                </div>
                <div className='min-h-[60svh] mt-5 md:mt-0 p-5 pb-10 bg-card-gradient rounded-xl justify-center items-center w-72 md:w-[30svw] max-w-[400px]'>
                    <div className='relative h-52'>
                    <video className='absolute md:right-16 right-12 top-24 md:w-[5svw] w-[15svw] md:h-[6svw]'  autoPlay loop muted>
                        <source  src='linkdinLogo.webm' itemType='video/webm' />
                      </video>
                      {/* <img className='absolute right-20 top-8 w-[6svw] h-[6svw]' src='linkdinLogo.gif'/> */}
                      <video className='absolute md:right-32 right-20 top-10 md:w-[10svw] md:h-[10svw]'  autoPlay loop muted>
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
                        <a href='/Linkedin' className='mt-5 flex justify-center'>
                          
                          <HoverBorderGradient containerClassName="rounded-5" as="button"
                              className="dark:bg-black w-[100%] text-center bg-white text-black dark:text-white flex items-center space-x-2"
                              >
                              <span className='text-lg'>Know More</span>
                          </HoverBorderGradient>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </MaxWidthWrapper>
  )
}

export default Section2