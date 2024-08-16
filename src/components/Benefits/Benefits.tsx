import Image from 'next/image'
import React from 'react'

const Benefits = () => {
    return (
        <div>
            <div className='custom-container'>
                <div className="text-center mb-12">
                    <h2 className="text-[35px] font-semibold">Benefits of Hiring Through Us</h2>
                    <p className="text-[12px] py-[20px]">
                        "Benefit from our efficient hiring process, matching qualified candidates to your construction <br />
                        projects, ensuring quality and reliability."
                    </p>
                </div>
                <div className="grid grid-cols-4 items-center gap-5">
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg rounded-b-none py-4 relative">
                        <div className='rounded-full border-[1.35px] border-dotted border-[#FF204E] p-[5px] w-[60px] h-[60px] absolute left-[40%] top-[-22%] '>
                            <div className='bg-[#FF204E] flex justify-center items-center rounded-full'>
                                <Image
                                    className=' rounded-full p-[11px] filter invert brightness-0 hue-rotate-180'
                                    src="/assets/Icon 4.svg"
                                    width={60}
                                    height={60}
                                    alt="card image"
                                />
                            </div>
                        </div>
                        <h5 className="text-center pt-6 pb-3">Access to Skilled Labor</h5>
                        <p className="text-[10px] text-center leading-[15px] px-4">
                            We Provide a pool of highly trained <br />
                            professional ready to contribute to your <br />
                            projects globally.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-[5.5px] bg-[#FF204E] rounded-b-lg"></div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg p-4 relative">
                        <div className='rounded-full border-[1.35px] border-dotted border-[#FF204E] p-[5px] w-[60px] h-[60px] absolute left-[40%] top-[-22%] '>
                            <div className='bg-[#FF204E] flex justify-center items-center rounded-full'>
                                <Image
                                    className=' rounded-full p-[11px] filter invert brightness-0 hue-rotate-180'
                                    src="/assets/Icon 5.svg"
                                    width={50}
                                    height={50}
                                    alt="card image"
                                />
                            </div>
                        </div>
                        <h5 className="text-center pt-6 pb-3">Cost Effective Solutions</h5>
                        <p className="text-[10px] text-center leading-[15px]">
                            Our service are designed to save you time and
                            reduce hiring costs by taking care of the entire
                            recruitment process.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-[5.5px] bg-[#FF204E] rounded-b-lg"></div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg py-4 relative">
                        <div className='rounded-full border-[1.35px] border-dotted border-[#FF204E] p-[5px] w-[60px] h-[60px] absolute left-[40%] top-[-22%] '>
                            <div className='bg-[#FF204E] flex justify-center items-center rounded-full'>
                                <Image
                                    className=' rounded-full p-[11px] filter invert brightness-0 hue-rotate-180'
                                    src="/assets/Icon 6.svg"
                                    width={50}
                                    height={50}
                                    alt="card image"
                                />
                            </div>
                        </div>
                        <h5 className="text-center pt-6 pb-3">Compliance & Documentation
                        </h5>
                        <p className="text-[10px] text-center leading-[15px] px-4">
                            We handle all necessary paperwork, ensuring
                            compliance with international labor laws &
                            regulations.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-[5.5px] bg-[#FF204E] rounded-b-lg"></div>
                    </div>
                    <div className="card-container bg-[#FBFBFB] shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg py-4 relative">
                        <div className='rounded-full border-[1.35px] border-dotted border-[#FF204E] p-[5px] w-[60px] h-[60px] absolute left-[40%] top-[-22%] '>
                            <div className='bg-[#FF204E] flex justify-center items-center rounded-full'>
                                <Image
                                    className=' rounded-full p-[11px] filter invert brightness-0 hue-rotate-180'
                                    src="/assets/Icon 7.svg"
                                    width={55}
                                    height={55}
                                    alt="card image"
                                />
                            </div>
                        </div>
                        <h5 className="text-center pt-6 pb-3">Tailored Recruitment</h5>
                        <p className="text-[10px] text-center leading-[15px] px-4">
                            We customize our recruitment process to
                            match the specific requirements of your
                            projects, ensuring a perfect fit for every role.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-[5.5px] bg-[#FF204E] rounded-b-lg"></div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Benefits