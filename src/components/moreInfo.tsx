import pop_one from '../assets/pop-one.jpg'
import pop_two from '../assets/pop-two.jpg'
import pop_three from '../assets/pop-three.jpg'
import pop_four from '../assets/pop-four.jpg'
import pop_five from '../assets/pop-five.jpg'
import pop_six from '../assets/pop-six.jpg'
import Image from 'next/image'
import CustomImage from './customImage'

export interface Data {
    img: any
    title: string
    desc: string
}

export default function MoreInfo() {
    const pop_detailed: Data[] = [
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
    return (
        <>
            <div>
                <h1 className='text-[#161414] text-[25px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Popular Destinations</h1>
                <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[30px] lg:grid-cols-4">
                    {
                        pop_detailed.map((item, index) => (
                            <div key={index}>
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
                <h1 className='text-[#161414] text-[25px] lg:text-[32px] font-[600] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]'>Hotels and Restaurants
                    View all</h1>
            </div>
        </>
    )
}
