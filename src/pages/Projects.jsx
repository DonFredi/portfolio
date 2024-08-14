import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import Fralon from '../assets/peanut.jpeg';
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si"
import { FaGithub } from "react-icons/fa";

import Client1 from '../assets/client1.jpg';
import Client2 from '../assets/client1.jpg';
const testimonials = [
    {
        image: Client1,
        name: "Rose T. - Co-Owner of Fralon Peanuts",
        text: "Working with Fredrick was a game-changer for our business. He transformed our website into a vibrant and user-friendly platform that truly represents our brand. His attention to detail and creative approach helped us engage more customers and increase our online sales. We highly recommend Fredrick for anyone looking to elevate their digital presence."
    },
    {
        image: Client2,
        name: "Mark D. - CEO of Delightful Recipes",
        text: "Fredrick's expertise in front-end development brought our project to life. He delivered a seamless and visually appealing user experience that exceeded our expectations. His ability to understand our needs and translate them into a functional and attractive website was impressive. Fredrick's work has been integral to our success, and we look forward to collaborating with him again."
    },
    {
        image: Client2,
        name: "Lisa R. - Founder of Fitness Focused",
        text: "Fredrick has an incredible talent for creating stunning and responsive web designs. He was instrumental in the launch of our new site, ensuring it was both aesthetically pleasing and easy to navigate. His professional approach and ability to meet tight deadlines made the entire process smooth and stress-free. Our clients love the new look, and we've seen a significant boost in traffic since the redesign."
    }
];



const Projects = () => {
    const [allProjects, setAllProjects] = useState(false);


    return (
        <section
            className='py-6  text-white mt-[100px]'>
            <h1 className='text-center font-semibold text-xl'>PORTFOLIO</h1>
            <h2 className='text-center mt-12 mx-6'>
                Take a look at some of the projects I have worked on to get a feel for my style and capabilities.
            </h2>
            <div className='grid grid-cols-1 gap-6 mt-8 p-6'>
                <div className='flex flex-col md:flex-row text-white p-6 md:p-16 gap-6 md:gap-20'>
                    <div className='relative'>
                        <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                        <img src={Fralon} alt="profile-pic" className='relative rounded-lg w-[300px] md:w-[400px] h-[300px] md:h-[400px] -top-4 -left-4' />
                    </div>
                    <div className='p-6 text-left md:w-1/2'>
                        <h3 className='text-xl font-semibold'>Fralon Peanuts App</h3>
                        <p className='mt-2'>
                            Explore how I brought together creativity, functionality, and user-centric design to deliver a digital experience that celebrates the love for peanut butter in every click.
                        </p>
                        <p className='text-sm mt-3 text-semibold'>Technologies: HTML, CSS, JavaScript, React</p>
                        <div className='mt-4 flex justify-between items-center'>
                            <Link to="https://donfredi.github.io/fralon-peanuts/" className='text-red-600 hover:underline'>Live Demo</Link>
                            <Link to="https://github.com/DonFredi/" className='text-red-600 hover:underline'>GitHub</Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row-reverse p-6 md:p-16 gap-6 md:gap-20'>
                    <div className='relative'>
                        <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                        <img src={Fralon} alt="profile-pic" className='relative rounded-lg w-[300px] md:w-[400px] h-[300px] md:h-[400px] -top-4 -left-4' />
                    </div>
                    <div className='p-6 text-left md:w-1/2'>
                        <h3 className='text-xl font-semibold'>Delightful Recipes App</h3>
                        <p className='mt-2'>
                            Delightful Recipes is a comprehensive and user-friendly recipe app designed to help cooking enthusiasts of all skill levels discover, save, and share delicious recipes from around the world.
                        </p>
                        <p className='mt-3 text-semibold'>Technologies: HTML, CSS, JavaScript, React</p>
                        <div className='mt-4 flex justify-between items-center'>
                            <Link to="link_to_live_demo2" className='text-red-600 hover:underline'>Live Demo</Link>
                            <Link to="https://github.com/DonFredi/" className='text-red-600 hover:underline'>GitHub</Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row p-6 md:p-16 gap-6 md:gap-20'>
                    <div className='relative'>
                        <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                        <img src={Fralon} alt="profile-pic" className='relative rounded-lg w-[300px] md:w-[400px] h-[300px] md:h-[400px] -top-4 -left-4' />
                    </div>
                    <div className='p-6 text-left md:w-1/2'>
                        <h3 className='text-xl font-semibold'>Project 3</h3>
                        <p className='mt-2'>Description of project 3.</p>
                        <p className='mt-3 text-semibold'>Technologies: HTML, CSS, JavaScript, React</p>
                        <div className='mt-4 flex justify-between items-center'>
                            <Link to="link_to_live_demo3" className='text-red-600 hover:underline'>Live Demo</Link>
                            <Link to="https://github.com/DonFredi/" className='text-red-600 hover:underline'>GitHub</Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Link
                        onClick={() => setAllProjects(!allProjects)}
                        className="custom-gradient rounded-xl transition-colors duration-300 ease-in-out p-3 hover:bg-gradient-to-r from-blue-500 to-green-500">
                        {allProjects ? 'View Less Projects ' : 'View All Projects'}
                    </Link>
                </div>
                {allProjects && (
                    <>
                        <div className='flex flex-col md:flex-row-reverse p-6 md:p-16 gap-6 md:gap-20'>
                            <div className='relative'>
                                <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                                <img src={Fralon} alt="profile-pic" className='relative rounded-lg w-[300px] md:w-[400px] h-[300px] md:h-[400px] -top-4 -left-4' />
                            </div>
                            <div className='p-6 text-left md:w-1/2'>
                                <h3 className='text-xl font-semibold'>Project 4</h3>
                                <p className='mt-2'>Description of project 3.</p>
                                <p className='mt-3 text-semibold'>Technologies: HTML, CSS, JavaScript, React</p>
                                <div className='mt-4 flex justify-between items-center'>
                                    <Link to="link_to_live_demo3" className='text-red-600 hover:underline'>Live Demo</Link>
                                    <Link to="https://github.com/DonFredi/" className='text-red-600 hover:underline'>GitHub</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row p-6 md:p-16 gap-6 md:gap-20'>
                            <div className='relative'>
                                <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-red-600 rounded-lg'></div>
                                <img src={Fralon} alt="profile-pic" className='relative rounded-lg w-[300px] md:w-[400px] h-[300px] md:h-[400px] -top-4 -left-4' />
                            </div>
                            <div className='p-6 text-left md:w-1/2'>
                                <h3 className='text-xl font-semibold'>Project 5</h3>
                                <p className='mt-2'>Description of project 3.</p>
                                <p className='mt-3 text-semibold'>Technologies: HTML, CSS, JavaScript, React</p>
                                <div className='mt-4 flex justify-between items-center'>
                                    <Link to="link_to_live_demo3" className='text-red-600 hover:underline'>Live Demo</Link>
                                    <Link to="https://github.com/DonFredi/" className='text-red-600 hover:underline'>GitHub</Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
                }


            </div>

            <h1 className='text-center font-semibold text-xl my-[100px]'>SKILLS</h1>
            <div className='text-center w-[80%] mx-auto'>

                <p>My expertise spans across essential web development technologies such as HTML, CSS, and JavaScript, which form the foundation of all modern websites
                    I am proficient in React, a powerful JavaScript library that I use to build dynamic, responsive, and interactive user interfaces.
                    Additionally, I have experience with various other technologies and frameworks that complement my development workflow, allowing me to deliver robust and efficient solutions.
                    Through continuous learning and hands-on experience, I have honed my skills to stay at the forefront of the ever-evolving web development landscape.

                </p>
            </div>
            <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 mx-auto">

                <div className="text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-yellow-300">
                    <IoLogoJavascript />
                    <p className='text-xl'>JavaScript</p>
                </div>
                <div className="text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-blue-400">
                    <IoLogoCss3 />
                    <p className='text-xl'>CSS3</p>
                </div>
                <div className="text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-blue-300">
                    <GrReactjs />
                    <p className='text-xl'>ReactJs</p>
                </div>
                <div className="text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-orange-400">
                    <IoLogoHtml5 />
                    <p className='text-xl'>HTML</p>
                </div>
                <div className="text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-blue-400">
                    <SiTailwindcss />
                    <p className='text-xl'>Tailwind CSS</p>
                </div>
                <div className="text-6xl flex items-center justify-center flex-col p-4 text-center my-4">
                    <FaGithub />
                    <p className='text-xl'>GitHub</p>
                </div>
            </div>

            <article className='my-28 p-4'>
                <h3 className='text-center font-semibold text-xl '>What do clients say?</h3>
                <p className='text-center my-8 mx-6'>Hearing from those I've had the pleasure to work with is one of the greatest validations of my work. Each project is a journey, and my clients' experiences are a testament to my dedication and skill.</p>
                <div className="w-[95%] p-4 mx-auto my-12 relative">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col md:flex-row justify-around items-center w-[70%] mx-auto p-4 my-12 gap-16 border-2 rounded-xl'>
                                    <img src={testimonial.image} alt={`client_${index + 1}`}
                                        className='w-32 h-32 rounded-full'
                                    />
                                    <div className='flex flex-col p-2 text-left md:w-[50%] w-[100%]'>
                                        <p className='font-bold'>{testimonial.name}</p>
                                        <p> <span className='text-2xl font-bold'> &quot;</span> {testimonial.text}

                                            <span className='text-2xl font-bold'>&quot;</span></p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Custom Navigation Buttons (optional styling) */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>

                </div>
            </article>
        </section>


    )
}

export default Projects