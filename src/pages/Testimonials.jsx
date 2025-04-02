import React from 'react'
import Client1 from '../assets/client1.jpg';
import Client2 from '../assets/client1.jpg';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";





const testimonials = [
    {
        image: Client1,
        name: "Rose T. - Co-Owner of Fralon Peanuts",
        text: "Working with Fredrick was a game-changer for our business. He transformed our website into a vibrant and user-friendly platform that truly represents our brand. His attention to detail and creative approach helped us engage more customers and increase our online sales. We highly recommend Fredrick for anyone looking to elevate their digital presence."
    },
    {
        image: Client2,
        name: "Erick N. - Co-Founder of Star Cars Auto",
        text: "Fredrick's expertise in front-end development brought our project to life. He delivered a seamless and visually appealing user experience that exceeded our expectations. His ability to understand our needs and translate them into a functional and attractive website was impressive. Fredrick's work has been integral to our success, and we look forward to collaborating with him again."
    },
    {
        image: Client2,
        name: "Lisa R. - Founder of Yoga Flow",
        text: "Fredrick has an incredible talent for creating stunning and responsive web designs. He was instrumental in the launch of our new site, ensuring it was both aesthetically pleasing and easy to navigate. His professional approach and ability to meet tight deadlines made the entire process smooth and stress-free. Our clients love the new look, and we've seen a significant boost in traffic since the redesign."
    }
];

const Testimonials = () => {
    return (
        <article className='my-22 text-white'>
            <motion.div
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                initial={{ y: 200, opacity: 0 }}     // Start off-screen
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
            >  <h3 className='heading text-center'>WHAT DO CLIENTS SAY?</h3></motion.div>
            <motion.div
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                initial={{ y: 200, opacity: 0 }}     // Start off-screen
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
            >
                <p className='my-8 w-[80%] mx-auto text-center'>Hearing from those I've had the pleasure to work with is one of the greatest validations of my work. Each project is a journey, and my clients' experiences are a testament to my dedication and skill.</p>
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
                <div className="my-12 relative  md:w-[90%] mx-auto w-[100%]">
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
                                <div className='flex flex-col md:flex-row justify-around items-center md:w-[80%] w-[90%] mx-auto md:p-4 p-2 my-12'>
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
                        <div className='block'>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>

                    </Swiper>

                </div>
            </motion.div>
        </article>
    )
}

export default Testimonials;