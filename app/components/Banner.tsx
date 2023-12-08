import React from 'react'
import codinganimation from '@/public/codinganimation.json'
import Lottie from 'lottie-react'

const Banner = () => {
  return (
      <div className='bg-white/10 p-2 w-full rounded flex lg:flex-row text-color-text xs:flex-col-reverse'>
          <div className='flex flex-col lg:gap-3 bg-black/60 rounded p-4 lg:w-3/5 text-white/80 xs:w-full   xs:gap-1'>
              <span className='lg:text-4xl underline text-white font-bold xs:text-2xl'>About</span>
              <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col lg:gap-1 xs:gap-0.5">
                  <span className='lg:text-xl font-semibold text-green-500/90 xs:text-base'>Progress: 60%</span>
                      <span className='lg:text-xl font-medium xs:text-base text-green-500  '>Code Compiled</span>
                      <span className='lg:text-xl font-medium  xs:text-base animate-pulse'>Code Building......</span>
                  </div>
                  
              </div>
             
              <span className='lg:text-3xl font-semibold underline xs:text-xl'>Hello I am Pawas Goyal</span>
              <span className='lg:text-lg font-medium xs:text-sm'>I am a Full Stack Developer</span>
              <span className='lg:text-lg font-medium xs:text-sm'>I also like watching anime and playing chess</span>
              <span className='lg:text-lg font-medium xs:text-sm'>Currently pursuing BTECH. at BPIT,Rohini</span>
              <span className='text-red-600  font-medium lg:text-2xl animate-pulse xs:text-lg'>Oops Fatal Error Coffee Break!!!</span>
              
          </div>
            <div className='lg:w-2/5 flex flex-row items-center justify-center outline-color-icon outline outline-1 xs:w-full '>
                <Lottie
                  animationData={codinganimation}
                  loop={true}
                  className='lg:h-[600x] lg:w-[600px] xs:h-[250px] xs:w-[250px]'
                    
                    
              ></Lottie>
              </div>
          
      
    </div>
  )
}

export default Banner
