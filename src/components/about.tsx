import Image from 'next/image'
import about_con from '../assets/content-about.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import CustomImage from './customImage'

export default function AboutPage() {
    const item = {
        img: about_con
    }
    return (
        <div className='flex flex-col-reverse text-center gap-[20px] pt-[60px] items-center lg:flex-row lg:text-left lg:gap-[40px]'>
            <div className='w-[100%] lg:w-[57%]'>
                <h1 className='text-[20px] md:text-[32px] font-[600] text-[#161414] mb-[15px]  md:mb-[30px] '>About Us</h1>
                <p className='text-[#5B5B5B] text-[16px] leading-[27px] mb-[15px] md:mb-[30px] xl:max-w-[656px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <a href="#" className='flex justify-center items-center gap-[5px] bg-[#F6F4FF] p-[10px] rounded-[12px] max-w-[153px] mx-auto lg:mx-0'>
                    <span className='text-[13px] md:text-[16px] text-[#5243C2]'>Read more</span>
                    <FaLongArrowAltRight color='#5243C2' size={20} />
                </a>
            </div>
            <div className="image-container relative h-[320px] lg:h-[270px] w-[100%] xl:h-[400px] md:w-[600px] mx-auto md:h-[400px] lg:w-[40%]">
                <CustomImage item={item} />
            </div>
        </div>
    )
}
