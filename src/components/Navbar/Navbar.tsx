import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='custom-container'>
            <div className='flex justify-between items-center'>
                <div className='py-[3px]'>
                    <Image src='/assets/Logo.svg' width={60} height={80} alt='logo' />
                </div>
                <div>
                    <nav>
                        <ul className='flex justify-between items-center gap-[50px] '>
                            <li className='text-[13px]'>About Us</li>
                            <li className='text-[13px]'>Employers</li>
                            <li className='text-[13px]'>Find Worker</li>
                            <li className='text-[13px]'>Industry</li>
                            <li className='text-[13px]'>Resources</li>
                            <button className='py-[8px] px-[15px] bg-[#004586] rounded-[3px] border-none text-[13px] text-white font-normal'>Contact Us</button>
                            <Image src='/assets/Country Icon.svg' width={25} height={25} alt='country' />
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navbar