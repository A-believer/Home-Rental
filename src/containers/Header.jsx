import React from 'react'
import Map from '../components/Map'

const Header = () => {
  return (
    <header id='home' className='flex lg:flex-row flex-col justify-between items-center lg:mx-[100px] md:mx-[70px] mx-[25px] mt-10'>
        <div className='hover:underline underline-offset-[10px] decoration-white transition ease-in-out delay-150 origin-bottom-left'>
              <h1 className='text-white xl:text-[52px] lg:text-[40px] text-[32px] xl:leading-[70px] lg:leading-[50px] leading-[40px]  tracking-tight capitalize font-vb text-left '>
                  The most affortable place to stay in the san franciso bay area
              </h1>
        </div>
          
        <div className='rounded-[10px] lg:mt-16 mt-4  mx-[50px] lg:max-w-full max-w-[350px]'>
            <Map/>
        </div>  
    </header>
  )
}

export default Header