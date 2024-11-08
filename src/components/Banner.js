import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[#222222] bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)] bg-[size:8rem_8rem]"></div>
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto text-center">
                    <h1 className="flex items-center justify-center text-[18px] md:text-[45px] lg:text-[65px] xl:text-[80px] text-[#ffffff] font-bold">
                        <span className="bg-[#4CE548] text-[#222222] font-bold px-8 py-3 rounded-2xl transform -skew-x-12">
                            TechnoZone
                        </span>
                        Agency
                    </h1>
                    <h3 className='text-[14px] md:text-[24px] lg:text-[36px] xl:text-[48px] text-[#ffffff] font-bold mt-4'>World wide Based Digital Agency</h3>


                    <p className="mt-4 sm:text-xl/relaxed text-[#DDD] sub-heading">
                        Technozome agency is a dynamic and innovative design agency that brings creative ideas to life.  We works with a wide range of clients to develop unique and effective branding, web design, and graphic design solutions.
                    </p>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222222" fillOpacity="1" d="M0,128L1440,192L1440,0L0,0Z"></path></svg>
            </div>

        </section>
    );
};

export default Banner;