'use client'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { FaBars, FaCalendarAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { HiMiniMagnifyingGlass, HiUsers } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdBicycle } from "react-icons/io";
import { useState } from 'react';
import Sidebar from './sidebar';


export default function Entry() {
    const [action, setAction] = useState(true)
    return (
        <section className="entry  text-white min-h-svh">
            <Sidebar action={action} setAction={setAction} />
            <div className="custom-container flex justify-between flex-col ">
                <div className='flex justify-between items-center h-[10vh]'>
                    <a href="/">
                        <Image src={logo} alt='logo of company' />
                    </a>
                    <nav className='hidden lg:flex items-center gap-[40px]'>
                        <a className='text-inherit text-[14px]' href="#">Home</a>
                        <a className='text-inherit text-[14px] opacity-[0.7]' href="#hotels">Hotels</a>
                        <a className='text-inherit text-[14px] opacity-[0.7]' href="#restaurants">Restaurants</a>
                        <a className='text-inherit text-[14px] opacity-[0.7]' href="#tours">Tours</a>
                        <a className='text-inherit text-[14px] opacity-[0.7]' href="#destinations">Destinations</a>
                        <a className='text-inherit text-[14px] opacity-[0.7]' href="#activities">Activities</a>
                        <a className='text-inherit text-[14px] opacity-[0.7]' href="#contact">Contact</a>
                    </nav>
                    <div className="control-panel flex items-center gap-[10px]">
                        <button>
                            User
                        </button>
                        <button className='block lg:hidden' onClick={() => setAction(false)}>
                            <FaBars size={20} />
                        </button>
                    </div>
                </div>
                <div className='h-[90vh] flex flex-col justify-evenly text-center'>
                    <div>
                        <h1 className='text-[30px] font-bold lg:text-[48px] text-balance'>Discover the most engaging places</h1>
                        <a href="#" className='flex justify-center items-center gap-[8px] bg-[#7B61FF] w-[260px] h-[50px] mx-auto rounded-[12px] mt-[20px] text-[16px] lg:text-[18px] font-bold'>
                            <TbWorld size={24} />
                            <span>Discover on 3D Globe</span>
                        </a>
                    </div>
                    <div className='bg-white text-black rounded-[12px] lg:flex justify-center items-center px-[20px]'>
                        <div className="content-entry grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div className='flex items-center gap-[10px] justify-start p-[16px]'>
                                <FaLocationDot size={24} color='#FFA800' className='animate-bounce' />
                                <div className="right-com text-start">
                                    <span className='tect-[#5B5B5B] text-[12px] md:text-[14px] font-[300]'>Location</span>
                                    <h3 className='text-[#161414] font-[500] text-[16px]'>Explore nearby destinations</h3>
                                </div>
                            </div>
                            <div className='flex items-center gap-[10px] justify-start p-[16px]'>
                                <IoMdBicycle size={24} color='#FFA800' className='animate-bounce' />
                                <div className="right-com text-start">
                                    <span className='tect-[#5B5B5B] text-[12px] md:text-[14px] font-[300]'>Activity</span>
                                    <h3 className='text-[#161414] font-[500] text-[16px]'>All Activities</h3>
                                </div>
                            </div>
                            <div className='md:flex items-center gap-[10px] justify-start p-[16px] hidden'>
                                <FaCalendarAlt size={24} color='#FFA800' className='animate-bounce' />
                                <div className="right-com text-start">
                                    <span className='tect-[#5B5B5B] text-[12px] md:text-[14px] font-[300]'>When</span>
                                    <h3 className='text-[#161414] font-[500] text-[16px]'>Choose a Date</h3>
                                </div>
                            </div>
                            <div className='md:flex items-center gap-[10px] justify-start p-[16px] hidden'>
                                <HiUsers size={24} color='#FFA800' className='animate-bounce' />
                                <div className="right-com text-start">
                                    <span className='tect-[#5B5B5B] text-[12px] md:text-[14px] font-[300]'>Guests</span>
                                    <h3 className='text-[#161414] font-[500] text-[16px]'>1 guest</h3>
                                </div>
                            </div>
                        </div>
                        <button className='w-[60px] h-[60px] flex justify-center items-center mx-auto bg-[#7B61FF] rounded-[12px] mb-[10px] lg:mb-0'>
                            <HiMiniMagnifyingGlass size={24} color='white' className='animate-pulse' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
