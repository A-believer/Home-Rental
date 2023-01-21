import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { HiMenu, HiX } from "react-icons/hi"
import 'animate.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
  return (
      <nav className='text-white pt-[15px] lg:pt-[19px]  flex text-[18px] font-dmSans font-m leading-[30px] lg:mx-[120px] md:mx-[70px] mx-[25px] justify-between items-center'>
          <img src={logo} alt="logo" className='md:w-[147px] md:h-[50px] w-[100px] h-[35px] md:mb-5 mb-3'/>

          <ul className={`sm:flex hidden justify-between items-end justify-self-end xl:mr-[200px] xl:gap-x-[30px] 3xl:gap-x-[150px] 3xl:mr-[300px] mt-7`}>
              <li className='border-b-[2.32181px] border-b-transparent hover:border-b-white hover:border-b-[2.32181px] px-[20px] pb-[10px]'>
                  <a href="#home">Home</a></li>
              <li className='border-b-[2.32181px] border-b-transparent hover:border-b-white hover:border-b-[2.32181px] px-[20px] pb-[10px]'>
                  <a href="#landlord">Landlord</a></li>
              <li className='border-b-[2.32181px] border-b-transparent hover:border-b-white hover:border-b-[2.32181px] px-[20px] pb-[10px]'>
                  <a href="#tenants">Tenants</a></li>
              <li className='border-b-[2.32181px] border-b-transparent hover:border-b-white hover:border-b-[2.32181px] px-[20px] pb-[10px]'>
                  <a href="#contactus">Contact Us</a></li>
          </ul>

          <div onClick={() => setToggle((prev) => !prev)}
          className="sm:hidden flex flex-1 justify-end items-center text-[28px] text-orange">
              {toggle ? <HiX/> : <HiMenu /> } 
          </div>
        
          <div className={`${toggle ? 'flex sm:hidden' : 'hidden'} absolute top-16 right-0 min-w-[140px] text-left text-[16px] leading-[20px] z-50 bg-offWhite mr-4 py-4 rounded-md slide-top`}>
              
           <ul className={`flex flex-col justify-end items-center gap-y-4 ml-7 text-orange`}>
                  <li><a href="#home">Home</a></li>
                  <hr className='h-[2.32181px] w-full bg-orange'/>
                  <li><a href="#landord">Landlord</a></li>
                  <hr className='h-[2.32181px] w-full bg-orange'/>
                  <li><a href="#tenants">Tenants</a></li>
                  <hr className='h-[2.32181px] w-full bg-orange'/>
                <li><a href="#contactus">Contact Us</a></li>
            </ul>   
        </div>
        
        
    </nav>
  )
}

export default Navbar