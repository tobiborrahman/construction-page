import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='bg-cover bg-center w-full h-[170px] flex justify-center items-center'
                style={{ backgroundImage: "url('/assets/Background-image-1.svg')" }}>

                <div>
                    <h2 className='text-white text-[30px] text-center font-semibold'>Construction</h2>
                    <nav>
                        <ul className='flex justify-center items-center gap-2 text-white pt-5'>
                            <li>Home </li>
                            <Image className='filter invert brightness-0 hue-rotate-0' src='/assets/icon 2.svg' width={18} height={18} alt='icon' />
                            <li className='font-primary'>Industry</li>
                            <Image className='filter invert brightness-0 hue-rotate-0' src='/assets/icon 2.svg' width={18} height={18} alt='icon' />
                            <li>Construction</li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Banner