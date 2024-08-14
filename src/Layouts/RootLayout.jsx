import React, { useState } from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import useActiveLink from "../Hooks/useActiveLinks";
import useWindowSize from "../Hooks/useWindowSize.";


const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowSize();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useActiveLink();


    return (
        <div className="bg-black relative">
            <header className="text-white p-5 flex flex-row justify-between items-center">
                <span className="logo">DON</span>

                {width > 800 ? (
                    <div className="flex flex-row gap-20">
                        <nav>
                            <ul className="flex justify-center flex-row text-xl font-bold gap-8 p-2">
                                <a
                                    href="#about"
                                    className="nav-link hover:text-red-600 transition-colors duration-300 ease-in-out"

                                >
                                    About
                                </a>
                                <a
                                    href="#projects"
                                    className="nav-link hover:text-red-600 transition-colors duration-300 ease-in-out"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#contacts"
                                    className="nav-link hover:text-red-600 transition-colors duration-300 ease-in-out"
                                >
                                    Contacts
                                </a>
                            </ul>
                        </nav>
                        <a
                            href="#contacts"
                            className="custom-gradient rounded-lg duration-300 ease-in-out py-3 px-2 hover:bg-gradient-to-r from-blue-500 to-green-500 transition-colors"

                        >
                            Contact Me
                        </a>
                    </div>
                ) : (
                    <div className="md:hidden flex items-center hover:bg-red-600 p-2 rounded-sm duration-300 ease-in-out transition-colors">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                )}
            </header>

            {isOpen && (
                <div
                    className={`bg-black absolute text-white top-16 left-0 w-full z-50 transition-all duration-500 ease-in-out flex flex-col gap-y-16 items-center ${isOpen ? "h-[320px]" : "h-0"
                        } overflow-hidden`}
                >
                    <ul className="flex flex-col justify-center text-center mt-9 gap-4 w-full ">
                        <a
                            href="#about"
                            className="hover:bg-red-600 p-2 transition-colors duration-500 ease-in-out"

                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:bg-red-600 p-2 transition-colors duration-500 ease-in-out"

                        >
                            Projects
                        </a>
                        <a
                            href="#contacts"
                            className="hover:bg-red-600 p-2 transition-colors duration-500 ease-in-out"

                        >
                            Contacts
                        </a>
                    </ul>
                    <a
                        href="#contacts"
                        className="p-2 hover:bg-red-600 transition-colors duration-500 ease-in-out rounded-lg self-center"

                    >
                        Contact Me
                    </a>
                </div>
            )}
            <section id="about">
                <About />
            </section>


            <section id="projects">
                <Projects />
            </section>

            <section id="contacts">
                <Contacts />
            </section>
        </div>
    );
};

export default RootLayout;
