import Image from 'next/image'
import logo from '../assets/logo-black.svg'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";



export default function Footer() {
    return (
        <div className='bg-[#F9F9F9] py-[40px] md:py-[60px] lg:py-[80px] mt-[30px] md:mt-[60px]' id='contact'>
            <div className='custom-container flex justify-between flex-col md:flex-row text-center md:text-left gap-[30px]'>
                <div>
                    <a href="/" className='flex justify-center items-center md:justify-start'>
                        <Image src={logo} alt='logo of company' />
                    </a>
                    <p className='text-[#5B5B5B] max-w-[350px] text-[13px] my-[18px]'>We always make our customers happy by providing as many choises as possible</p>
                    <div className='flex items-center gap-[20px] justify-center md:justify-start'>
                        <a href="#">
                            <FaFacebook size={32} color='#5243C2' />
                        </a>
                        <a href="#">
                            <FaTwitter size={32} color='#5243C2' />
                        </a>
                        <a href="#">
                            <FaInstagram size={32} color='#5243C2' />
                        </a>
                    </div>
                </div>
                <nav className='hidden xl:flex justify-between lg:gap-[20px] xl:gap-[60px]'>
                    <ul>
                        <p className='text-[#161414] text-[14px] md:text-[18px] font-[500] mb-[20px]'>About</p>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">About Us</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Features</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">News</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Menu</a></li>
                    </ul>
                    <ul>
                        <p className='text-[#161414] text-[14px] md:text-[18px] font-[500] mb-[20px]'>Company</p>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Why 2rism</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Partner With Us</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">FAQ</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <p className='text-[#161414] text-[14px] md:text-[18px] font-[500] mb-[20px]'>Support</p>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Account</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Support Center</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Feedback</a></li>
                        <li><a className='text-[#5B5B5B] text-[12px] lg:text-[13px]' href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="contact-section">
                    <p className='text-[#161414] text-[16px] lg:text-[18px] font-[500] max-w-[388px]'>Subscribe on our destination review newsletters</p>
                    <form action='#' className='flex justify-start gap-[20px] items-center mt-[20px]'>
                        <div className='flex gap-[16px] bg-white items-center pl-[20px] rounded-3xl'>
                            <CiMail size={24} color='#FFA800' />
                            <input type="email" name="email" placeholder='Your Email' className='placeholder:text-[#5B5B5B] bg-transparent w-[100%] py-[16px] outline-none text-[#5243C2] pr-[10px]' />
                        </div>
                        <input type="submit" value='Send' className='flex justify-center items-center gap-[5px] bg-[#F6F4FF] p-[10px] rounded-[12px] text-[14px] md:text-[16px] text-[#5243C2]' />
                    </form>
                </div>
            </div>
        </div>
    )
}
