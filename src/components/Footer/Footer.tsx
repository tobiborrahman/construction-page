import Image from 'next/image';
import React from 'react';

// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { MdOutlineMail, MdOutlinePhoneInTalk } from 'react-icons/md';
// import { FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div className="bg-[#004585] mt-[100px]">
                <div className="custom-container">
                    <div className="text-white pb-5 px-[15px]">
                        <div className="flex justify-between py-10 text-white">
                            <div>
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
                            <div className="md:my-0 lg-my-0">
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
                            <div>
                                <div>

                                    <h4 className="text-[18px] font-medium pb-4 underline underline-offset-8">
                                        Our Services
                                    </h4>

                                    <div className='flex justify-normal items-center'>
                                        <Image className='filter invert brightness-0 hue-rotate-0 pr-1' src='/assets/Icon 3.svg' width={20} height={20} alt='right arrow' />
                                        <h6 className="text-[13px]">
                                            Permanent Recruitment
                                        </h6>
                                    </div>
                                    upport
                                </h6>
                            </div>
                        </div>
                        <div className="md:mt-0">
                            <span className="text-xl font-bold pb-4">
                                Get In Touch
                            </span>
                            <p className="text-[17px] mt-4 mb-3">
                                Subscribe Our Newsletter to

                                Get Latest Update & News
                            </p>

                            <input
                                className="w-full py-3 pl-3 mb-2 text-white font-semibold rounded bg-transparent  border border-[#C25934]"
                                placeholder="Enter Your Email "
                                type="email"
                            />
                            <button className="w-full py-3 pl-3 bg-[#C25934] font-semibold rounded">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
};

export default Footer;
