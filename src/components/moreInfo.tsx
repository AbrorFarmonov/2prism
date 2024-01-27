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
import Image from 'next/image'
import CustomImage from './customImage'

import ReactStars from 'react-stars'


import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

import Link from 'next/link'



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
    return (
        <>
            <div>
                <h1 className='text-[#161414] text-[25px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Popular Destinations</h1>
                <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[30px] lg:grid-cols-4">
                    {
                        pop_detailed.map((item, index) => (
                            <div key={index} >
                                <div className="image-container relative h-[270px] lg:h-[220px]">
                                    <CustomImage item={item} />
                                </div>
                                <h2 className='text-[#161414] fpmt-[600] text-[16px] mt-[8px] leading-none'>{item.title}</h2>
                                <span className='text-[#979797] text-[13px]'>{item.desc}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="starter flex justify-between items-center">
                    <h1 className='text-[#161414] text-[20px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Hotels and Restaurants</h1>
                    <Link href={'/'} className='flex justify-center items-center gap-[5px] bg-[#F6F4FF] p-[10px] rounded-[12px]'>
                        <span className='text-[13px] md:text-[16px] text-[#5243C2]'>View all</span>
                        <FaLongArrowAltRight color='#5243C2'/>
                    </Link>
                </div>
                <div className="hotels-container grid grid-cols-1 gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px]">
                    {
                        hotelsData.map((item, index) => (
                            <div key={index}>
                                <div className="image-container relative h-[320px] lg:h-[320px]">
                                    <CustomImage item={item} />
                                </div>
                                <h2 className='text-[#161414] text-[16px] font-[500] mt-[10px] mb-[12px]'>{item.title}</h2>
                                <div className="info flex justify-between items-center">
                                    <div className='flex items-center gap-[5px]'>
                                        <FaLocationDot color='#979797' />
                                        <span className='text-[#979797] text-[13px]'>{item.location}</span>
                                    </div>
                                    <ReactStars value={item.rate} edit={false} size={16} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
