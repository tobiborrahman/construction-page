import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='bg-cover bg-center w-full h-[170px] flex justify-center items-center'
                style={{ backgroundImage: "url('/assets/Background-image-1.svg')" }}>

                <div>
                    <h2 className='text-white text-center font-primary'>Construction</h2>
                    <nav>
                        <ul className='flex justify-center items-center gap-2 text-white pt-5'>
                            <li>Home </li>
                            <Image src='/assets/icon 2.svg' width={18} height={18} alt='icon' />
                            <li>Industry</li>
                            <Image src='/assets/icon 2.svg' width={18} height={18} alt='icon' />
                            <li>Construction</li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Banner