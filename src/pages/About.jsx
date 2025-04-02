import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../assets/developer.jpeg';
import Profile1 from '../assets/hero-pic.jpg';


const About = () => {


    return (
        <section

            className='flex flex-col text-white z-0'>

            <div className='flex flex-col md:flex-row-reverse md:justify-between text-white p-2 mt-8'>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ x: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className='relative'>
                        <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                        <img src={Profile1} alt="profile-pic" className='relative rounded-lg w-[300px] h-[300px] md:w-[400px] md:h-[400px] -top-4 -left-4' />
                    </div>

                </motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ x: -200, opacity: 0 }}     // Start off-screen
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    className='flex flex-col justify-start w-full md:w-1/2'
                >

                    <div >
                        <h1 className='heading'>WELCOME TO MY PORTFOLIO WEBSITE</h1>
                        <p className='leading-relaxed font-semibold text-2xl'>
                            Hello, my name's <span className='text-red-500 '> Fredrick</span>
                        </p>
                        <p>I'm a passionate frontend developer with a keen eye for detail and a love for creating beautiful, user-friendly web experiences.
                        </p>
                        <div className='flex flex-col md:flex-row justify-start gap-x-4 gap-y-4 w-full my-8 text-center'>
                            <a href="#projects"
                                className='rounded-xl transition-colors duration-300 ease-in-out p-3 bg-primary hover:bg-red-400 '
                            >View Projects</a>

                        </div>
                    </div>
                </motion.div>
            </div>


            <motion.div
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                initial={{ y: 200, opacity: 0 }}     // Start off-screen
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
            >
                <div className='flex flex-col md:flex-row text-white p-8 gap-6 md:gap-12 mt-32'>
                    <div className='relative'>
                        <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                        <img src={Profile} alt="profile-pic" className='relative rounded-lg w-[300px] h-[300px] md:w-[400px] md:h-[400px] -top-4 -left-4' />
                    </div>
                    <div className='flex flex-col justify-start w-full md:w-1/2 md:mx-16'>
                        <p className='heading'>ABOUT ME</p>
                        <p className='leading-relaxed'>
                            I started my journey in web development with a desire to combine my creativity and technical skills to build websites that not only look great but also provide an exceptional user experience. Over the years, I've worked on a variety of projects, from small business websites to complex web applications, always striving to stay on the cutting edge of technology and design trends.
                        </p>

                    </div>
                </div>
            </motion.div>

        </section >

    )
}

export default About