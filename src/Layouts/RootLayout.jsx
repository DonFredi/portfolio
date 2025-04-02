import { useState } from "react";
import About from "../pages/About";
import ServiceCard from "../pages/ServiceCard";
import Projects from "../pages/Projects";
import Testimonials from "../pages/Testimonials";
import Contacts from "../pages/Contacts";
import useWindowSize from "../Hooks/useWindowSize.";




const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowSize();

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
        <div className="bg-black relative">
            <header id="about-me" className="text-white h-12 p-5 flex flex-row justify-between items-center">
                <span className="text-primary text-2xl font-bold logo">&lt; FN /&gt;</span>

                {width > 800 ? (
                    <div className="flex flex-row gap-20 mt-4">
                        <nav>
                            <ul className="flex justify-center flex-row text-xl font-bold gap-8 p-2">
                                <a
                                    href="#services"
                                    className="nav-link hover:text-primary transition-colors duration-300 ease-in-out"
                                >
                                    Services
                                </a>
                                <a
                                    href="#projects"
                                    className="nav-link hover:text-primary transition-colors duration-300 ease-in-out"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#testimonials"
                                    className="nav-link hover:text-primary transition-colors duration-300 ease-in-out"
                                >
                                    Testimonials
                                </a>
                                <a
                                    href="#contacts"
                                    className="nav-link hover:text-primary transition-colors duration-300 ease-in-out"
                                >
                                    Contacts
                                </a>
                            </ul>
                        </nav>
                        <a href="mailto:dondadi.fn@gmail.com?subject=Hiring Inquiry&body=Hello Fredrick, I would like to discuss..."
                            className="rounded-lg duration-300 ease-in-out py-3 px-2 bg-primary hover:bg-red-400 transition-colors"
                        >
                            Hire Me
                        </a>
                    </div>
                ) : (
                    <div className="md:hidden flex items-center hover:bg-primary p-1 rounded-sm duration-300 ease-in-out transition-colors">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className={`w-8 h-8 ${isOpen ? "hidden" : "block"}`}
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

                            {/* "X" Icon */}
                            <svg
                                className={`w-8 h-8 ${isOpen ? "block" : "hidden"}`}
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

            <div className="relative z-50">
                {/* Hamburger Menu Button */}
                <button onClick={toggleMenu} className="hamburger-button z-60">
                    {/* Hamburger icon here */}
                </button>

                {isOpen && (
                    <div className="absolute top-0 right-0 h-fit w-full z-50 flex transition-all duration-500 ease-in-out">
                        {/* Sidebar (75% width) */}
                        <div
                            className={`bg-black text-white w-full h-full p-4 flex flex-col gap-y-16 items-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                        >
                            <ul className="flex flex-col justify-center text-center gap-4 w-full">
                                <a onClick={toggleMenu} href="#services" className="hover:bg-primary p-2 transition-colors duration-500 ease-in-out">
                                    Services
                                </a>
                                <a onClick={toggleMenu} href="#projects" className="hover:bg-primary  p-2 transition-colors duration-500 ease-in-out">
                                    Projects
                                </a>
                                <a onClick={toggleMenu} href="#testimonials" className="hover:bg-primary  p-2 transition-colors duration-500 ease-in-out">
                                    Testimonials
                                </a>
                                <a onClick={toggleMenu} href="#contacts" className="hover:bg-primary  p-2 transition-colors duration-500 ease-in-out">
                                    Contacts
                                </a>
                            </ul>
                            <a href="mailto:dondadi.fn@gmail.com?subject=Hiring Inquiry&body=Hello Fredrick, I would like to discuss..." className="p-2 bg-primary hover:bg-red-400 transition-colors duration-500 ease-in-out rounded-lg self-center">
                                Hire Me
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <article className="w-[94%] mx-auto">
                <section>

                    <About />
                </section>

                <section id="services">
                    <ServiceCard />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="testimonials">
                    <Testimonials />
                </section>
            </article>
            <section id="contacts">
                <Contacts />
            </section>
        </div>
    );
};

export default RootLayout;
