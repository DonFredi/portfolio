import React, { useState, useEffect } from 'react';
import Profile from '../assets/hero-pic.jpg';
import Image1 from '../assets/code.jpg';
import Image2 from '../assets/code-2.jpg';
import Image3 from '../assets/code-3.jpg';
import Image4 from '../assets/code-4.jpg';


import { Link } from 'react-router-dom';

const heroSectionImages = [
    Image1,
    Image2,
    Image3,
    Image4
];


const About = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const newIndex = prevIndex === heroSectionImages.length - 1 ? 0 : prevIndex + 1;

                return newIndex;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);



    return (
        <section
            className='flex flex-col text-white p-2 z-0'>
            <div
                className="h-screen bg-cover bg-center flex flex-col items-center justify-evenly"
                style={{
                    backgroundImage: `url(${heroSectionImages[currentImageIndex]})`,
                    transition: 'background-image 1s ease-in-out' // Smooth transition effect
                }}
            >
                {/* Top Content */}
                <div>
                    <p className="text-4xl font-extrabold text-red-600">
                        FRONTEND DEVELOPER &lt;/&gt;
                    </p>

                </div>

                {/* Bottom Button */}
                <div className="self-center">
                    <Link
                        to=""
                        className="custom-gradient rounded-lg hover:bg-gradient-to-r from-blue-500 to-green-500 transition-colors duration-300 ease-in-out p-3"
                    >
                        View Projects
                    </Link>
                </div>
            </div>



            <div className='flex flex-col md:flex-row justify-start p-4 md:p-18 mt-[100px] items-center '>
                <div className='relative mb-8 md:mb-0 md:mr-8 p-2'>
                    <div className='absolute top-2 left-4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                    <img src={Profile} alt="profile-pic" className='relative rounded-lg w-[300px] h-[300px] md:w-[400px] md:h-[400px] -top-4 -left-4' />
                </div>
                <div className='flex flex-col justify-start w-full md:w-1/2 md:ml-16'>
                    <p className='py-4 font-semibold text-xl'>ABOUT ME</p>
                    <p className='text-lg leading-relaxed mb-2'>
                        Hi, I'm Fredrick Nunda, a passionate frontend developer with a keen eye for detail and a love for creating beautiful, user-friendly web experiences. With a strong foundation in HTML, CSS, Tailwind ,JavaScript, and React, I have a proven track record of delivering high-quality web applications.
                    </p>
                    <p className='text-lg leading-relaxed'>
                        I started my journey in web development with a desire to combine my creativity and technical skills to build websites that not only look great but also provide an exceptional user experience. Over the years, I've worked on a variety of projects, from small business websites to complex web applications, always striving to stay on the cutting edge of technology and design trends.
                    </p>

                    <div className='flex flex-col md:flex-row justify-start gap-x-4 gap-y-4 w-full my-8 text-center'>
                        <Link className='custom-gradient rounded-xl transition-colors duration-300 ease-in-out p-3 hover:bg-gradient-to-r from-blue-500 to-green-500 '>Hire Me</Link>
                        <Link
                            to=""
                            className='rounded-xl border border-red-400 hover:border-red-600 transition-colors duration-300 ease-in-out p-3'>
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default About