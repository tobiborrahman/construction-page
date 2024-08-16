'use client';

import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="custom-container block sm:hidden">
                <div className="flex justify-between items-center">
                    <div className="py-[3px]">
                        <Image
                            src="/assets/Logo.svg"
                            width={60}
                            height={80}
                            alt="logo"
                        />
                    </div>
                    <div>
                        <nav>
                            <ul className="flex justify-between items-center gap-[50px]">
                                <p className="text-[12px]">About Us</p>
                                <div className='flex items-center gap-1'>
                                    <p className="text-[12px]">Employers</p>
                                    <Image
                                        src="/assets/Icon 1.svg"
                                        width={15}
                                        height={15}
                                        alt="down arrow icon"
                                    />
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p className="text-[12px]">Find Worker</p>
                                    <Image
                                        src="/assets/Icon 1.svg"
                                        width={15}
                                        height={15}
                                        alt="down arrow icon"
                                    />
                                </div>
                                <p className="text-[12px]">Industry</p>
                                <div className='flex items-center gap-1'>
                                    <p className="text-[12px]">Resources</p>
                                    <Image
                                        src="/assets/Icon 1.svg"
                                        width={15}
                                        height={15}
                                        alt="down arrow icon"
                                    />
                                </div>
                                <button className="py-[8px] px-[15px] bg-[#004586] rounded-[3px] border-none text-[13px] text-white font-normal">
                                    Contact Us
                                </button>
                                <div className='flex gap-1'>
                                    <Image
                                        src="/assets/Country Icon.svg"
                                        width={25}
                                        height={25}
                                        alt="country"
                                    />
                                    <Image
                                        src="/assets/Icon 1.svg"
                                        width={15}
                                        height={15}
                                        alt="down arrow icon"
                                    />
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block">
                <div className="custom-container">
                    <div className="flex justify-between items-center py-3">
                        <div className="py-[3px]">
                            <Image
                                src="/assets/Logo.svg"
                                width={60}
                                height={80}
                                alt="logo"
                            />
                        </div>
                        <div>
                            {/* Hamburger Menu Button */}
                            <button
                                className={` ${menuOpen ? 'hidden' : 'block'
                                    } text-[24px] focus:outline-none`}
                                onClick={toggleMenu}
                            >
                                &#9776; {/* Hamburger Icon */}
                            </button>
                        </div>
                        <nav
                            className={`${menuOpen ? 'block' : 'hidden'
                                }  h-screen bg-white z-10  relative w-auto bg-transparent flex items-center gap-[50px]`}
                        >
                            <ul className="flex flex-col items-center justify-center gap-8  h-full">

                                <li className="text-[13px]">About Us</li>
                                <li className="text-[13px]">Employers</li>
                                <li className="text-[13px]">Find Worker</li>
                                <li className="text-[13px]">Industry</li>
                                <li className="text-[13px]">Resources</li>
                                <li>
                                    <button className="py-[8px] px-[15px] bg-[#004586] rounded-[3px] border-none text-[13px] text-white font-normal">
                                        Contact Us
                                    </button>
                                </li>
                                <li>
                                    <Image
                                        src="/assets/Country Icon.svg"
                                        width={25}
                                        height={25}
                                        alt="country"
                                    />
                                </li>
                            </ul>
                            <div className="absolute top-4 right-4">
                                {/* Close Menu Button */}
                                <button
                                    className="text-[24px] focus:outline-none"
                                    onClick={toggleMenu}
                                >
                                    &times; {/* Close Icon */}
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
