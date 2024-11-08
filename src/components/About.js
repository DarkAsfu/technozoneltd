import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className='-mt-40 md:-mt-48 lg:-mt-56 xl:-mt-72'>
                <div className='w-10/12 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
                    <Image src="https://i.ibb.co.com/DYxk4r1/businessdevelopment.jpg" alt='image' width={297} height={297} style={{border: "8px solid #ffffff", borderRadius: "32px"}} className='rotate-12'/>
                    <Image src="https://i.ibb.co.com/ZhPrWVG/design.png" alt='image' width={297} height={297} style={{border: "8px solid #ffffff", borderRadius: "32px"}} className='-rotate-2' />
                    <Image src="https://i.ibb.co.com/s6G4R4R/free-dashboard-templates-1.jpg" alt='image' width={297} height={297} style={{border: "8px solid #ffffff", borderRadius: "32px"}} className='rotate-2'/>
                    <Image src="https://i.ibb.co.com/0mrdCX9/marketing.jpg" alt='image' width={297} height={297} style={{border: "8px solid #ffffff", borderRadius: "32px"}} className='-rotate-12' />
                </div>
            </div>
        </div>
    );
};

export default About;