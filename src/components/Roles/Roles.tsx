import Image from 'next/image';
import React from 'react';

const Roles = () => {
    return (
        <div>
            <div className="custom-container pb-[80px]">
                <div className="text-center">
                    <h2 className="text-[35px] font-semibold">Roles we Fill</h2>
                    <p className="text-[12px] py-[20px]">
                        "We fill roles in construction, matching skilled
                        professionals like engineers, supervisors, <br />  and
                        laborers to projects requiring expertise and
                        efficiency."
                    </p>
                </div>
                <div className="grid grid-cols-4 items-center gap-5">
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_15px_0_rgba(99,99,99,0.2)] rounded-lg p-[10px]">
                        <Image
                            src="/assets/Image 2.svg"
                            width={250}
                            height={150}
                            alt="card image"
                        />
                        <h5 className="text-center py-[10px]">Project Manager</h5>
                        <p className="text-[10px] text-center leading-[15px]">
                            "Oversee construction projects, ensuring
                            timelines, budgets, and quality meet objectives with effective team coordination."
                        </p>
                        <div className='flex justify-center items-center pt-2'>
                            <p className='text-red-500 text-[12px] pr-1 '>Contact Us</p>
                            <Image src='/assets/Icon 3.svg' width={12} height={12} alt='right arrow icon' />
                        </div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_15px_0_rgba(99,99,99,0.2)] rounded-lg p-[10px]">
                        <Image
                            src="/assets/Image 3.svg"
                            width={250}
                            height={150}
                            alt="card image"
                        />
                        <h5 className="text-center py-[10px]">Site Supervisors</h5>
                        <p className="text-[10px] text-center leading-[15px] ">
                            "Site supervisors oversee daily operations,
                            ensuring safety, efficiency, and compliance on
                            construction sites."
                        </p>
                        <div className='flex justify-center items-center pt-2'>
                            <p className='text-red-500 text-[12px] pr-1 '>Contact Us</p>
                            <Image src='/assets/Icon 3.svg' width={12} height={12} alt='right arrow icon' />
                        </div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_15px_0_rgba(99,99,99,0.2)] rounded-lg p-[10px]">
                        <Image
                            src="/assets/Image 4.svg"
                            width={250}
                            height={150}
                            alt="card image"
                        />
                        <h5 className="text-center py-[10px]">Engineers (Civil, electrical)</h5>
                        <p className="text-[10px] text-center leading-[15px]">
                            "Construction engineers manage projects,
                            ensuring designs are implemented effectively,
                            meeting safety and quality standards."
                        </p>
                        <div className='flex justify-center items-center pt-2'>
                            <p className='text-red-500 text-[12px] pr-1 '>Contact Us</p>
                            <Image src='/assets/Icon 3.svg' width={12} height={12} alt='right arrow icon' />
                        </div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_15px_0_rgba(99,99,99,0.2)] rounded-lg p-[10px]">
                        <Image
                            src="/assets/Image 5.svg"
                            width={250}
                            height={150}
                            alt="card image"
                        />
                        <h5 className="text-center py-[10px]">Architects</h5>
                        <p className="text-[10px] text-center leading-[15px] ">
                            "Architects design buildings and structures,
                            balancing functionality, aesthetics, and client
                            requirements with technical expertise."
                        </p>
                        <div className='flex justify-center items-center pt-2'>
                            <p className='text-red-500 text-[12px] pr-1 '>Contact Us</p>
                            <Image src='/assets/Icon 3.svg' width={12} height={12} alt='right arrow icon' />
                        </div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_15px_0_rgba(99,99,99,0.2)] rounded-lg p-[10px]">
                        <Image
                            src="/assets/Image 6.svg"
                            width={250}
                            height={150}
                            alt="card image"
                        />
                        <h5 className="text-center py-[10px]">Skilled Tradespeople</h5>
                        <p className="text-[10px] text-center leading-[15px] ">
                            "Construction skilled tradespeople specialize in
                            various crafts, ensuring quality workmanship in
                            building and renovation projects"
                        </p>
                        <div className='flex justify-center items-center pt-2'>
                            <p className='text-red-500 text-[12px] pr-1 '>Contact Us</p>
                            <Image src='/assets/Icon 3.svg' width={12} height={12} alt='right arrow icon' />
                        </div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_15px_0_rgba(99,99,99,0.2)] rounded-lg p-[10px]">
                        <Image
                            src="/assets/Image 7.svg"
                            width={250}
                            height={150}
                            alt="card image"
                        />
                        <h5 className="text-center py-[10px]">General Laborers</h5>
                        <p className="text-[10px] text-center leading-[15px]">
                            "General laborers support construction projects
                            by performing tasks such as loading, unloading,
                            and site cleaning."
                        </p>
                        <div className='flex justify-center items-center pt-2'>
                            <p className='text-red-500 text-[12px] pr-1 '>Contact Us</p>
                            <Image src='/assets/Icon 3.svg' width={12} height={12} alt='right arrow icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Roles;
