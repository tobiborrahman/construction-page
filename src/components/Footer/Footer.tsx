import Image from 'next/image';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTelegramPlane, FaTwitch, FaTwitter } from 'react-icons/fa';



const Footer = () => {
    return (
        <>
            <div className="bg-[#004585] mt-[100px] sm:mt-[400px] pb-[30px]">
                <div className="custom-container">
                    <div className="text-white px-[15px]">
                        <div className="flex sm:flex-col md:flex-col lg:flex-row justify-between pt-10 text-white">
                            <div className='mb-0 sm:pb-10'>
                                <div>
                                    <Image

                                        src="/assets/Logo.svg"
                                        width={70}
                                        height={70}
                                        alt="footer logos"
                                    />

                                    <p className='text-[10px] leading-[16px] py-3 pb-1 w-[280px]'>
                                        Hire & Fire is a cutting-edge job
                                        website designed to connect employers
                                        with top-tier talent across various
                                        industries. Utilizing advanced matching
                                        algorithms, it streamlines the hiring
                                        process, ensuring quick and effective
                                        placements. Employers benefit from
                                        efficient tools for posting jobs,
                                        screening candidates, and managing
                                        applications. Ideal for businesses
                                        aiming for growth, Hire & Fire is your
                                        go-to resource for all recruitment
                                        needs. Please note that it operates on
                                        an employer basis and does not provide
                                        jobs directly to workers.
                                    </p>

                                    <div className="mt-3">
                                        <button className="py-[8px] px-[15px] bg-[#FC0845] rounded-[3px] border-none text-[13px] text-white font-normal">
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-0 sm:mb-10">
                                <div>
                                    <h4 className="text-[18px] font-medium pb-4 underline underline-offset-8">
                                        Quick Links
                                    </h4>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Home
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            About Us
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Services
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Industries We Serve
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Blog & News
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            FAQ
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Contact Us
                                        </h6>
                                    </div>

                                </div>
                            </div>
                            <div className='pb-0 sm:pb-10'>
                                <div>

                                    <h4 className="text-[18px] font-medium pb-4 underline underline-offset-8">
                                        Our Services
                                    </h4>

                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Permanent Recruitment
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Contract Staffing
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Housing & Accomodation Support
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Compliance and Legal Support
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Workforce Planning
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Background Checks
                                        </h6>
                                    </div>
                                    <div className='flex justify-normal items-center pb-4'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Onboarding Suppor
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="md:mt-0">
                                <span className="text-xl font-bold pb-4">
                                    Get In Touch
                                </span>
                                <p className="text-[12px] mt-4 mb-3">
                                    Subscribe Our Newsletter to <br />
                                    Get Latest Update & News
                                </p>

                                <div className='flex'>
                                    <input
                                        className="w-[200px] py-[10px] pl-3 rounded placeholder-[#000000] text-[10px]"
                                        placeholder="Your Email Here"
                                        type="email"
                                    />
                                    <button className='bg-[#FC0845] text-white text-[12px] font-normal px-4 rounded ml-[-10px]'>
                                        Subscribe
                                    </button>
                                </div>
                                <div className='flex items-center mt-10'>
                                    <div className='bg-[#FC0845] rounded-full mr-2'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 p-[6px]' src='/assets/Icon 9.svg' width={25} height={25} alt='phone icon' />
                                    </div>
                                    <p className='text-[10px]'>+40 123 456 789</p>
                                </div>
                                <div className='flex items-center mt-3'>
                                    <div className='bg-[#FC0845] rounded-full mr-2'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 p-[6px]' src='/assets/Icon 10.svg' width={25} height={25} alt='phone icon' />
                                    </div>
                                    <p className='text-[10px]'>contact@hireandfire.agency</p>
                                </div>
                                <div className='flex mt-3 items-center'>
                                    <div className='bg-[#FC0845] rounded-full mr-2'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 p-[6px]' src='/assets/Icon 8.svg' width={25} height={25} alt='phone icon' />
                                    </div>
                                    <p className='text-[10px] leading-[15px]'>Strada ING. Zablovschi, Nr. 10, Biroul 1, <br /> Sectorul 1,
                                        Bucuresti, Romania.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center pt-[30px]'>
                    <div className='w-[1300px]'>
                        <div className='text-white flex sm:flex-col sm:items-center md:flex-col lg:flex-row justify-between items-center px-[95px]'>
                            <div>
                                <p className='text-[10px] font-normal'>&copy; Copyright 2024 "Hire & Fire" All Rights Reserved</p>
                            </div>
                            <div className='flex justify-between items-center gap-4 py-2 lg:my-0'>
                                <li className='text-[10px] font-normal'>Privacy Policy</li>
                                <li className='text-[10px] font-normal'>Terms & Conditions</li>
                                <li className='text-[10px] font-normal'>Cookie Policy</li>
                            </div>
                            <div className='flex justify-between items-center gap-3'>
                                <p className='text-[10px] font-normal'>Follow Us</p>

                                <div className='flex justify-between items-center gap-[10px]'>
                                    <li className='bg-white rounded-full p-[8px] w-6 h-6 text-[#FC0845] flex items-center justify-center'><FaFacebookF /></li>
                                    <li className='bg-white rounded-full p-[6px] w-6 h-6 text-[#FC0845] flex items-center justify-center'><AiFillInstagram /></li>
                                    <li className='bg-white rounded-full p-[6px] w-6 h-6 text-[#FC0845] flex items-center justify-center'><FaTwitter /></li>
                                    <li className='bg-white rounded-full p-[6px] w-6 h-6 text-[#FC0845] flex items-center justify-center'><FaTelegramPlane /></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
