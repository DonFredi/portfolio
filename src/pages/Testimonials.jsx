import { useState } from 'react'
import Client1 from '../assets/butter.jpg';
import Client2 from '../assets/benz.png';
import Client3 from '../assets/client1.jpg'

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
    const [index, setIndex] = useState(0);
    const length = testimonials.length;
    const testimonial = testimonials[index];

    const prevSlide = () => setIndex(index === 0 ? length - 1 : index - 1);
    const nextSlide = () => setIndex(index === length - 1 ? 0 : index + 1);




    return (
        <article className='my-22 text-white'>
            <h3 className='heading text-center'>WHAT DO CLIENTS SAY?</h3>

            <p className='my-8 w-[80%] mx-auto text-center'>
                Hearing from those I've had the pleasure to work with is one of the greatest validations of my work. Each project is a journey, and my clients' experiences are a testament to my dedication and skill.
            </p>

            <div className="relative w-full max-w-3xl mx-auto p-8 rounded-2xl shadow-lg text-center my-14">
                <div className="transition-all duration-500 ease-in-out">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="mb-4">"{testimonial.text}"</p>
                    <h3 className="mt-4 text-lg">{testimonial.name}</h3>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    <button onClick={prevSlide} className="px-6 py-2 bg-primary rounded-full transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                        ←
                    </button>
                    <button onClick={nextSlide} className="px-6 py-2 bg-primary rounded-full transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                        →
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Testimonials;