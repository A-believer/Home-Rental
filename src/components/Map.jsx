import React from 'react'
import search from "../assets/icons/v7.png"

const Map = () => {
  return (
    <div className='flex flex-col'>
        <iframe
        className='xl:h-[340px] xl:w-full h-[250px] w-[300px] rounded-2xl mx-auto shadow-xl shadow-black'
              src="https://maps.google.com/maps?q=lagos,%20&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe> 

        <div className='flex xl:bg-white bg-transparent xl:w-[408px] w-full xl:h-[88px] lg:h-[60px] h-[30px] justify-center items-center rounded-[10px] cursor-pointer font-poppins font-m text-[14px] leading-[28px] mt-5 shadow-xl shadow-black'>
            <select className='rounded-tl-[5px] rounded-bl-[5px] border border-[#E6E6E6] lg:py-[15px] lg:px-[23px] py-2 px-4 outline-none shadow-lg shadow-black/20'>
                <option value="all">All Type</option>
            </select> 
            <select className='border border-[#E6E6E6] lg:py-[15px] lg:px-[23px] py-2 px-4 shadow-lg shadow-black/20'>
                <option value="location">Neighbourhood</option>
              </select>
            <div className='bg-[#23A6F0] lg:w-[50px] lg:h-[50px] w-[36px] h-[36px] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] shadow-lg shadow-black/20'>
                <img src={search} alt="search" className='w-[14px] h-[14px] cursor-pointer'/>
            </div>
              
        </div>  
    </div>
  )
}

export default Map