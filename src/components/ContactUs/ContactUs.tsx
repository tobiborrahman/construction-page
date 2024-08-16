import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className='custom-container flex justify-center items-center mt-[100px]'>
                <div className='w-[750px] bg-[#FBFBFB] h-[370px] shadow-[0_2px_15px_0_rgba(0,0,0,0.1)] borders'>
                    <div className='flex h-full'>
                        <div className='bg-[url("/assets/Background%20image%202.svg")] bg-cover bg-no-repeat w-[300px] h-full text-white flex justify-center items-center'>
                            <div>
                                <h3 className='text-white text-[25px] font-semibold'>Contact Us</h3>
                                <p className='text-white text-[12px] pb-6'>Say something to start a live chat</p>
                                <div className='flex pb-4'>
                                    <div className='bg-[#004586] w-[35px] h-[35px] rounded-[5px] p-2 mr-3'>
                                        <Image className='filter invert brightness-0 hue-rotate-0' src='/assets/Icon 8.svg' width={30} height={30} alt='location icon' />
                                    </div>
                                    <div>
                                        <h6 className='text-white font-normal'>Company Location</h6>
                                        <p className='text-[10px] text-white leading-[15px]'>Bucureşti Sectorul 1, Strada ING. <br />
                                            <span>ZABLOVSCHI, Nr. 10, BIROUL 1</span></p>
                                    </div>
                                </div>
                                <div className='flex pb-4'>
                                    <div className='bg-[#004586] w-[35px] h-[35px] rounded-[5px] p-2 mr-3'>
                                        <Image className='filter invert brightness-0 hue-rotate-0' src='/assets/Icon 9.svg' width={40} height={40} alt='location icon' />
                                    </div>
                                    <div>
                                        <h5 className='text-white font-normal'>Phone Number</h5>
                                        <p className='text-[10px] text-white leading-[15px]'>
                                            +(40) 7372 28622
                                        </p>
                                    </div>
                                </div>
                                <div className='flex pb-4'>
                                    <div className='bg-[#004586] w-[35px] h-[35px] rounded-[5px] p-2 mr-3'>
                                        <Image className='filter invert brightness-0 hue-rotate-0' src='/assets/Icon 10.svg' width={40} height={40} alt='location icon' />
                                    </div>
                                    <div>
                                        <h5 className='text-white font-normal'>Email Address</h5>
                                        <p className='text-[10px] text-white leading-[15px]'>
                                            career@hireandfire.eu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[450px] px-12  flex justify-center items-center'>
                            <form className="w-full">
                                <input className='border rounded-[5px] border-black w-full mb-[14px]  pl-3 py-1 placeholder-[#000000]' type="text" placeholder='First Name' /> <br />
                                <input className='border rounded-[5px] border-black w-full mb-[14px] placeholder-[#000000] pl-3 py-1' type="email" placeholder='Email' /> <br />
                                <input className='border rounded-[5px] border-black w-full mb-[14px] placeholder-[#000000] pl-3 py-1' type="number" placeholder='Phone Number' /> <br />
                                <textarea className='border rounded-[5px] border-black h-[80px] w-full resize-none placeholder-[#000000] pl-3 py-1' name="message" id="message" placeholder='Write Your Message'></textarea>
                                <div className='flex justify-center items-center mt-3'>
                                    <button className='py-[8px] px-[15px] bg-[#004586] rounded-[3px] border-none text-[13px] text-white font-normal'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs