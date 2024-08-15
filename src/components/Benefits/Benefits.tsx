import Image from 'next/image'
import React from 'react'

const Benefits = () => {
    return (
        <div>
            <div className='custom-container'>
                <div className="text-center">
                    <h2 className="text-[35px]">Benefits of Hiring Through Us</h2>
                    <p className="text-[15px] py-[25px]">
                        "Benefit from our efficient hiring process, matching qualified candidates to your construction <br />
                        projects, ensuring quality and reliability."
                    </p>
                </div>
                <div className="grid grid-cols-4 items-center gap-5">
                    <div className="card-container shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg p-4 relative">
                        <div className='rounded-full border-[1.3px] border-dotted border-red-500 p-1 w-[60px] h-[60px] absolute left-[40%] top-[-17.5%] flex justify-center items-center'>
                            <Image
                                className='bg-red-500 rounded-full p-3'
                                src="/assets/Icon 4.svg"
                                width={50}
                                height={50}
                                alt="card image"
                            />
                        </div>
                        <h5 className="text-center pt-6 pb-3">Access to Skilled Labor</h5>
                        <p className="text-[12px] text-center leading-[15px]">
                            We Provide a pool of highly trained <br />
                            professional ready to contribute to your <br />
                            projects globally.
                        </p>

                    </div>
                    <div className="card-container shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg p-4 relative">
                        <div className='rounded-full border-[1.3px] border-dotted border-red-500 p-1 w-[60px] h-[60px] absolute left-[40%] top-[-17.5%] flex justify-center items-center'>
                            <Image
                                className='bg-red-500 rounded-full p-3'
                                src="/assets/Icon 4.svg"
                                width={50}
                                height={50}
                                alt="card image"
                            />
                        </div>
                        <h5 className="text-center pt-6 pb-3">Access to Skilled Labor</h5>
                        <p className="text-[12px] text-center leading-[15px]">
                            We Provide a pool of highly trained <br />
                            professional ready to contribute to your <br />
                            projects globally.
                        </p>

                    </div>
                    <div className="card-container shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg p-4 relative">
                        <div className='rounded-full border-[1.3px] border-dotted border-red-500 p-1 w-[60px] h-[60px] absolute left-[40%] top-[-17.5%] flex justify-center items-center'>
                            <Image
                                className='bg-red-500 rounded-full p-3'
                                src="/assets/Icon 4.svg"
                                width={50}
                                height={50}
                                alt="card image"
                            />
                        </div>
                        <h5 className="text-center pt-6 pb-3">Access to Skilled Labor</h5>
                        <p className="text-[12px] text-center leading-[15px]">
                            We Provide a pool of highly trained <br />
                            professional ready to contribute to your <br />
                            projects globally.
                        </p>

                    </div>
                    <div className="card-container shadow-[0px_2px_10px_0_rgba(99,99,99,0.2)] rounded-lg p-4 relative">
                        <div className='rounded-full border-[1.3px] border-dotted border-red-500 p-1 w-[60px] h-[60px] absolute left-[40%] top-[-17.5%] flex justify-center items-center'>
                            <Image
                                className='bg-red-500 rounded-full p-3'
                                src="/assets/Icon 4.svg"
                                width={50}
                                height={50}
                                alt="card image"
                            />
                        </div>
                        <h5 className="text-center pt-6 pb-3">Access to Skilled Labor</h5>
                        <p className="text-[12px] text-center leading-[15px]">
                            We Provide a pool of highly trained <br />
                            professional ready to contribute to your <br />
                            projects globally.
                        </p>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Benefits