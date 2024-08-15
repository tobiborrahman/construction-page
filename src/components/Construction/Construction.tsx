import Image from 'next/image';
import React from 'react';

const Construction = () => {
    return (
        <div className='custom-container py-[80px]'>
            <div className='flex justify-between items-center'>
                <div className='w-[525px]'>
                    <h2 className='text-[35px]'>
                        Your Partner in international Construction Recruitment
                    </h2>
                    <p className='text-[15px] py-[25px]'>
                        "Hire & Fire Job s platform for the construction
                        industry connects companies with skilled professionals
                        globally. We streamline recruitment processes, ensuring
                        precise matches for project requirements through our
                        extensive network and industry specific expertise. Our
                        platform offers tailored solutions for construction
                        companies, facilitating efficient hiring and workforce
                        management. Partner with us to access a pool of
                        qualified talent and optimize your construction projects
                        with ease."
                    </p>
                    <button className="py-[8px] px-[15px] bg-blue-800 rounded-sm border-none text-[13px] text-white font-normal">
                        Contact Us
                    </button>
                </div>
                <div>
                    <Image src='/assets/Image 1.svg' width={500} height={300} alt='construction image' />
                </div>
            </div>
        </div>
    );
};

export default Construction;
