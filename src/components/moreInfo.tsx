'use client'
import pop_one from '../assets/pop-one.jpg'
import pop_two from '../assets/pop-two.jpg'
import pop_three from '../assets/pop-three.jpg'
import pop_four from '../assets/pop-four.jpg'
import pop_five from '../assets/pop-five.jpg'
import pop_six from '../assets/pop-six.jpg'
import hotel_one from '../assets/hotel-one.jpg'
import hotel_two from '../assets/hotel-two.jpg'
import hotel_three from '../assets/hotel-three.jpg'
import hotel_four from '../assets/hotel-four.jpg'
import travel_one from '../assets/travel-one.jpg'
import travel_two from '../assets/travel-two.jpg'

import act_one from '../assets/act-one.jpg'
import act_two from '../assets/act-two.jpg'
import act_three from '../assets/act-three.jpg'
import act_four from '../assets/act-four.jpg'

import Image from 'next/image'
import CustomImage from './customImage'

import ReactStars from 'react-stars'


import { FaLocationDot, FaRegComment } from "react-icons/fa6";
import { FaLongArrowAltRight, FaRegCalendar, FaRegUser } from "react-icons/fa";

import Link from 'next/link'
import { MotionDiv, fromLeft, fromRight, fromTop } from './animation'



export default function MoreInfo() {
    const pop_detailed = [
        {
            img: pop_one,
            title: 'Big Sur',
            desc: 'California, USA'
        },
        {
            img: pop_two,
            title: 'Prescott',
            desc: 'Arizona, USA'
        },
        {
            img: pop_three,
            title: 'Fort Mayers',
            desc: 'Florida, USA'
        },
        {
            img: pop_four,
            title: 'Tucson',
            desc: 'Arizona, USA'
        },
        {
            img: pop_five,
            title: 'St. Joseph',
            desc: 'Michigan, USA'
        },
        {
            img: pop_six,
            title: 'Madrid',
            desc: 'Spain'
        },
    ]

    const hotelsData = [
        {
            img: hotel_one,
            title: 'Monastero Santa Rosa Hotel & Spa',
            location: 'Salerno, Italy',
            rate: 5
        },
        {
            img: hotel_two,
            title: 'Grand Hotel Tremezzo',
            location: 'Lake Como, Italy',
            rate: 3
        },
        {
            img: hotel_three,
            title: 'The Oberoi Udaivilas, Udaipur',
            location: 'Udaipur, India',
            rate: 4
        },
        {
            img: hotel_four,
            title: 'AKA Beverly Hills',
            location: 'Los Angeles, United States',
            rate: 3
        },
    ]

    const travelData = [
        {
            img: travel_one,
            title: 'East Village Ice Cream Crawl',
            desc: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
            date: 'Today',
            writer: 'Maria Philips',
            comment: 2
        },
        {
            img: travel_two,
            title: 'Brooklyn Bridge cinematic photo walk',
            desc: 'This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. ',
            date: 'Today',
            writer: 'James Calzoni',
            comment: 17
        }
    ]

    const activitiesData = [
        {
            img: act_one,
            title: 'Sailing'
        },
        {
            img: act_two,
            title: 'Climbing'
        },
        {
            img: act_three,
            title: 'Skiing'
        },
        {
            img: act_four,
            title: 'Hiking'
        },
    ]
    return (
        <>
            <div id='destinations'>
                <MotionDiv variants={fromLeft} initial='initial' whileInView='animate' transition={{ duration: .7, ease: 'backInOut', delay: 0.6 }} className='text-[#161414] text-[25px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Popular Destinations</MotionDiv>
                <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[30px] lg:grid-cols-4">
                    {
                        pop_detailed.map((item, index) => (
                            <MotionDiv variants={fromRight} initial='initial' whileInView='animate' transition={{ delay: 0.4 * index, duration: 0.6, ease: 'backInOut' }} key={index} >
                                <div className="image-container relative h-[270px] lg:h-[220px] xl:h-[350px]">
                                    <CustomImage item={item} />
                                </div>
                                <h2 className='text-[#161414] fpmt-[600] text-[16px] mt-[8px] leading-none'>{item.title}</h2>
                                <span className='text-[#979797] text-[13px]'>{item.desc}</span>
                            </MotionDiv>
                        ))
                    }
                </div>
            </div>
            <div id='hotels'>
                <MotionDiv variants={fromLeft} initial='initial' whileInView='animate' transition={{ duration: .7, ease: 'backInOut', delay: 0.6 }} className="starter flex justify-between items-center" id='restaurants'>
                    <h1 className='text-[#161414] text-[20px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Hotels and Restaurants</h1>
                    <Link href={'/'} className='flex justify-center items-center gap-[5px] bg-[#F6F4FF] p-[10px] rounded-[12px]'>
                        <span className='text-[13px] md:text-[16px] text-[#5243C2]'>View all</span>
                        <FaLongArrowAltRight color='#5243C2' />
                    </Link>
                </MotionDiv>
                <div className="hotels-container grid grid-cols-1 gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px]">
                    {
                        hotelsData.map((item, index) => (
                            <MotionDiv variants={fromRight} initial='initial' whileInView='animate' transition={{ delay: 0.4 * index, ease: 'backInOut', duration: 0.4 }} key={index}>
                                <div className="image-container relative h-[320px] lg:h-[320px]">
                                    <CustomImage item={item} npm r />
                                </div>
                                <h2 className='text-[#161414] text-[16px] font-[500] mt-[10px] mb-[12px]'>{item.title}</h2>
                                <div className="info flex justify-between items-center">
                                    <div className='flex items-center gap-[5px]'>
                                        <FaLocationDot color='#979797' />
                                        <span className='text-[#979797] text-[13px]'>{item.location}</span>
                                    </div>
                                    <ReactStars value={item.rate} edit={false} size={16} />
                                </div>
                            </MotionDiv>
                        ))
                    }
                </div>
            </div>
            <div className="travel-section" id='tours'>
                <MotionDiv variants={fromLeft} initial='initial' whileInView='animate' transition={{ duration: .7, ease: 'backInOut', delay: 0.6 }} className="starter flex justify-between items-center">
                    <h1 className='text-[#161414] text-[20px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Travel Tips and Advice</h1>
                    <Link href={'/'} className='flex justify-center items-center gap-[5px] bg-[#F6F4FF] p-[10px] rounded-[12px]'>
                        <span className='text-[13px] md:text-[16px] text-[#5243C2]'>View all</span>
                        <FaLongArrowAltRight color='#5243C2' />
                    </Link>
                </MotionDiv>
                <div className="travel-container flex justify-between flex-col xl:flex-row gap-[30px]">
                    {
                        travelData.map((item, index) => (
                            <MotionDiv variants={fromRight} initial='initial' whileInView='animate' transition={{ delay: 0.4 * index, ease: 'backInOut', duration: 0.4 }} key={index} className='flex flex-col justify-center md:flex-row gap-[15px] md:gap-[30px]'>
                                <div className="image-container relative h-[320px] lg:h-[320px] w-[100%] md:w-[47%] xl:h-[400px]">
                                    <CustomImage item={item} />
                                </div>
                                <div className='w-[100%] md:w-[47%] md:min-h-[100%] flex justify-between flex-col pb-[10px]'>
                                    <div>
                                        <h1 className='text-[#161414] text-[20px] font-[600] mb-[16px]'>{item.title}</h1>
                                        <p className='text-[#5B5B5B] text-[16px]'>{item.desc}</p>
                                    </div>
                                    <div className="info-part flex justify-between items-center">
                                        <div className='flex items-center gap-[4px]'>
                                            <FaRegCalendar color='#878787' size={16} />
                                            <span className='text-[#878787] text-[12px]'>{item.date}</span>
                                        </div>
                                        <div className='flex items-center gap-[4px]'>
                                            <FaRegUser color='#878787' size={16} />
                                            <span className='text-[#878787] text-[12px]'>{item.writer}</span>
                                        </div>
                                        <div className='flex items-center gap-[4px]'>
                                            <FaRegComment color='#878787' size={16} />
                                            <span className='text-[#878787] text-[12px]'>{item.comment}</span>
                                        </div>
                                    </div>
                                </div>
                            </MotionDiv>
                        ))
                    }
                </div>
            </div>
            <div className='activities-section' id='activities'>
                <MotionDiv variants={fromLeft} initial='initial' whileInView='animate' transition={{ duration: .7, ease: 'backInOut', delay: 0.6 }} className="starter flex justify-between items-center">
                    <h1 className='text-[#161414] text-[20px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Travel Tips and Advice</h1>
                    <Link href={'/'} className='flex justify-center items-center gap-[5px] bg-[#F6F4FF] p-[10px] rounded-[12px]'>
                        <span className='text-[13px] md:text-[16px] text-[#5243C2]'>View all</span>
                        <FaLongArrowAltRight color='#5243C2' />
                    </Link>
                </MotionDiv>
                <div className="act-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-[32px] gap-y-[20px]">
                    {
                        activitiesData.map((item, index) => (
                            <MotionDiv variants={fromRight} initial='initial' whileInView='animate' transition={{ delay: 0.4 * index, ease: 'backInOut', duration: 0.4 }} key={index}>
                                <div className="image-container relative h-[320px] lg:h-[270px] w-[100%] md:w-[100%] xl:h-[400px]">
                                    <CustomImage item={item} />
                                </div>
                                <h2 className='text-[#161414] text-[16px] font-[500] mt-[16px]'>{item.title}</h2>
                            </MotionDiv>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
