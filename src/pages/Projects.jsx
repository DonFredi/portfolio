import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarCars from '../assets/mercedesFrontView.jpg';
import Recipe from '../assets/recipe.jpg';
import Yoga from '../assets/flexibility.jpg';
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const [allProjects, setAllProjects] = useState(false);

    // Sample projects array
    const projects = [
        {
            title: "Star Cars Auto",
            description: "Explore how I brought together creativity, functionality, and user-centric design to deliver a digital experience for Star Cars Auto repair shop.",
            img: StarCars,
            liveDemo: import.meta.env.VITE_STAR_AUTO_LIVE_LINK,
            github: import.meta.env.VITE_STAR_AUTO_GITHUB,
        },
        {
            title: "Delightful Recipes App",
            description: "Delightful Recipes is a user-friendly app designed for cooking enthusiasts to discover and share delicious recipes.",
            img: Recipe,
            liveDemo: import.meta.env.VITE_RECIPE_APP_LIVE_LINK,
            github: import.meta.env.VITE_RECIPE_APP_GITHUB,
        },
        {
            title: "Yoga Flow",
            description: "The Yoga Flow website is a modern, user-friendly platform designed to offer a seamless experience for yoga enthusiasts.",
            img: Yoga, // Replace with actual image if different
            liveDemo: import.meta.env.VITE_YOGA_STUDIO_LIVE_LINK,
            github: import.meta.env.VITE_YOGA_STUDIO_GITHUB,
        },
        {
            title: "Project 4",
            description: "Description of project 4.",
            img: Recipe, // Replace with actual image if different
            liveDemo: "link_to_live_demo4",
            github: "https://github.com/DonFredi/",
        },
        // Add more projects as needed
    ];

    return (
        <section className='py-6 text-white mt-32'>
            <motion.div
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                initial={{ y: 200, opacity: 0 }}     // Start off-screen
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
            >  <h1 className=' heading text-center'>PROJECTS</h1></motion.div>
            <motion.div
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                initial={{ y: 200, opacity: 0 }}     // Start off-screen
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
            > <h2 className='text-center mt-12 mx-6'>
                    Take a look at some of the projects I have worked on to get a feel for my style and capabilities.
                </h2></motion.div>


            <div className='grid grid-cols-1 gap-6 my-24'>
                {/* Render Projects */}
                {projects.slice(0, allProjects ? projects.length : 3).map((project, index) => (
                    <motion.div
                        key={index}
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}  text-white p-8 gap-6 md:gap-12 mb-14`}>
                            <div className="relative">
                                <div className='absolute top-2 left-4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black border-8 border-primary rounded-lg'></div>
                                <img src={project.img} alt={project.title} className="relative rounded-lg w-[300px] md:w-[400px] h-[300px] md:h-[400px] -top-4 -left-4" />
                            </div>
                            <div className="p-6 text-left md:w-1/2">
                                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                                <p className="mt-2">{project.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary  hover:underline">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* View More Projects */}
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                ><div className="flex justify-center items-center">
                        <Link
                            onClick={() => setAllProjects(!allProjects)}
                            className="rounded-xl transition-colors duration-300 ease-in-out p-3 bg-primary hover:bg-red-400">
                            {allProjects ? 'View Less Projects' : 'View All Projects'}
                        </Link>
                    </div></motion.div>

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
                <h1 className='heading text-center'>SKILLS</h1>
            </motion.div>
            <motion.div
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                initial={{ y: 200, opacity: 0 }}     // Start off-screen
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
            >

                <p className='w-[80%] mx-auto text-center'>
                    My expertise spans across essential web development technologies such as HTML, CSS, and JavaScript, which form the foundation of all modern websites
                    I am proficient in React, a powerful JavaScript library that I use to build dynamic, responsive, and interactive user interfaces.
                    Additionally, I have experience with various other technologies and frameworks that complement my development workflow, allowing me to deliver robust and efficient solutions.
                    Through continuous learning and hands-on experience, I have honed my skills to stay at the forefront of the ever-evolving web development landscape.
                </p>

            </motion.div>
            <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 mx-auto">
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="slide-up text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-yellow-300">
                        <IoLogoJavascript />
                        <p className='text-xl'>JavaScript</p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="slide-up text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-blue-400">
                        <IoLogoCss3 />
                        <p className='text-xl'>CSS3</p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="slide-up text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-blue-300">
                        <GrReactjs />
                        <p className='text-xl'>ReactJs</p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="slide-up text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-orange-400">
                        <IoLogoHtml5 />
                        <p className='text-xl'>HTML</p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="slide-up text-6xl flex items-center justify-center flex-col p-4 text-center my-4 text-blue-400">
                        <SiTailwindcss />
                        <p className='text-xl'>Tailwind CSS</p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="slide-up text-6xl flex items-center justify-center flex-col p-4 text-center my-4">
                        <FaGithub />
                        <p className='text-xl'>GitHub</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
