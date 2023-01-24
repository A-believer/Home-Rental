import React from 'react'

const Subheading = ({text1, text2}) => {
  return (
    <div className='capitalize font-inter font-vvb lg:text-[35px] md:text-[25px] text-[20px] lg:leading-[40px] md:leading-[30px] leading-[25px] text-primary'>
      <h1 className='hover:underline lg:underline-offset-[10px] underline-offset-[2px] decoration-orange'>
        <span className='underline decoration-orange lg:underline-offset-[10px] underline-offset-[2px]'>{text1}</span>{text2}
      </h1>      
    </div>
  )
}

export default Subheading