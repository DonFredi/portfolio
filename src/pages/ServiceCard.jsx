import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaPalette, FaCode, FaBolt, FaTachometerAlt, FaBug } from 'react-icons/fa';

const ServiceCard = () => {
    const services = [
        {
            id: 0,
            icon: FaDesktop,
            title: "Responsive Design",
            description: "In today's mobile-first world, having a website that looks great on all devices is essential. I ensure that your website automatically adapts to different screen sizes, whether on a smartphone, tablet, or desktop. Your audience will enjoy a seamless experience, no matter how they view your site.",
        },
        {
            id: 1,
            icon: FaPalette,
            title: "UI/UX Design",
            description: "Great design is about more than aesthetics—it's about providing an intuitive and enjoyable user experience. I translate complex user needs into simple, elegant interfaces that are easy to navigate. Every click, scroll, and interaction is crafted with the user in mind, ensuring an intuitive journey across your site.",
        },
        {
            id: 2,
            icon: FaCode,
            title: "Frontend Development",
            description: "I bring your vision to life by transforming static designs into interactive, fully functioning websites. Using the latest technologies like React, JavaScript, HTML, and CSS, I build modern, responsive websites that provide a smooth user experience while maintaining clean, maintainable code.",
        },
        {
            id: 3,
            icon: FaBolt,
            title: "Animation & Interactive Elements",
            description: "Bring your website to life with engaging animations and interactive features. I integrate subtle yet impactful animations to make your site feel dynamic and responsive, giving your users a more immersive experience.",
        },
        {
            id: 4,
            icon: FaTachometerAlt,
            title: "Performance Optimization",
            description: "A fast website is critical to retaining visitors and improving SEO. I optimize your site's loading times, ensuring efficient performance across devices and browsers. This ensures that your visitors can access your content quickly without delays.",
        },
        {
            id: 5,
            icon: FaBug,
            title: "Testing & Debugging",
            description: "Launching a flawless website is essential for user satisfaction. I rigorously test every element of your site for bugs, glitches, and inconsistencies across different browsers and devices, ensuring a smooth, error-free experience for your users.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length); // Cycle through slides
        }, 7000); // Change slide every 5 seconds (including time in view)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [services.length]);

    return (
        <section className='mt-36 text-white p-2'>
            <motion.div
                viewport={{ once: true, amount: 0.1 }}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <h1 className='text-3xl font-semibold mb-8 text-primary text-center header'>WHAT I DO</h1>
            </motion.div>

            <motion.div
                viewport={{ once: true, amount: 0.1 }}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <p className='w-[85%] md:w-[70%] mx-auto'>
                    As a front-end developer, I specialize in creating dynamic, responsive, and user-friendly web experiences. My services focus on delivering visually appealing designs, high-performance websites, and seamless interactions that work across all devices. Here's how I can help bring your ideas to life:
                </p>
            </motion.div>

            <motion.div
                viewport={{ once: true, amount: 0.1 }}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className='w-[100%]  overflow-hidden relative mt-20'>
                <div className="flex slides" style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}>
                    {services.map((service) => (
                        <div key={service.id} className='slide min-h-[450px] w-full p-4 '>
                            <div className='flex flex-col items-center gap-y-4 w-[80%] mx-auto'>
                                <service.icon className="text-2xl mb-4 text-white p-6 w-28 h-28 rounded-xl bg-primary" />
                                <h2 className='text-xl font-semibold text-primary text-center'>{service.title}</h2>
                                <p className='text-center'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default ServiceCard;
