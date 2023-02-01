import React from 'react'
import { Subheading } from '../components'
import { items } from '../data'
import { costimg } from '../assets/images'


const Cost = ({text1, text2}) => {
  return (
      <section className='lg:py-[40px] py-[20px] lg:ml-[100px] md:ml-[70px] mx-[25px]'>
          <Subheading text1="minimum living cost " text2="takes care of every thing"/>
      <div className='flex lg:flex-row flex-col justify-between items-center lg:mt-[50px] md:mt-[35px] mt-[20px]'>
        <div className=''>
          <img src={costimg} alt="img" className='lg:w-auto lg:h-auto w-[180px] h-[250px]'/>
        </div>
        <div className='capitalize font-b lg:text-[25px] text-[15px] leading-[18px] lg:leading-[35px] grid grid-cols-3 lg:ml-10'>
          {items.map((item, index) => (
            <div
              key={item.id + index}
              className='mr-10'>
              <div className={`lg:w-[77px] lg:h-[77px] w-[45px] h-[45px] flex justify-center items-center shadow-lg rounded-[10px]`}>
                <img src={item.img} alt="img" className={`lg:w-[${item.w}px] lg:h-[${item.h}px] w-[${item.sw}px] h-[${item.sh}px] `} />
              </div>
              
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cost