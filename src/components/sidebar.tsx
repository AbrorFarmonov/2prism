import { FaPhoneVolume } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";


export default function Sidebar({ action, setAction }: any) {
    return (
        <div className={action ? 'fixed top-0 w-full min-h-screen overflow-y-hidden backdrop-blur-3xl z-50 right-[-100%] transition-all duration-500 rounded-[250px]' : 'fixed top-0 w-full min-h-screen overflow-y-hidden backdrop-blur-3xl z-50 right-[0] transition-all duration-500 rounded-0'}>
            <button className="absolute top-[20px] right-[20px]" onClick={() => setAction(!action)}>
                <IoCloseSharp size={25}/>
            </button>
            <div className="links flex justify-evenly flex-col min-h-svh">
                <div className="flex flex-col gap-[25px] text-[#ffffff]">
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[17px]' href="#">Home</a>
                    </button>
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[17px]' href="#hotels">Hotels</a>
                    </button>
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[17px]' href="#restaurants">Restaurants</a>
                    </button>
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[17px]' href="#tours">Tours</a>
                    </button>
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[17px]' href="#destinations">Destinations</a>
                    </button>
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[17px]' href="#activities">Activities</a>
                    </button>
                    <button onClick={() => setAction(true)}>
                        <a className='text-inherit text-[14px]' href="#contact">Contact</a>
                    </button>
                </div>
                <div className="bg-[#5243C2] flex justify-center items-center max-w-[70%] mx-auto py-[20px] px-[30px] rounded-[10px]">
                    <a href="tel:+13105553890" className="flex justify-center items-center gap-[7px]">
                        <span>+1 (310) 555-38-90</span>
                        <FaPhoneVolume size={20} />
                    </a>
                </div>
            </div>

        </div>
    )
}
