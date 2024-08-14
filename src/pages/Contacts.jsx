import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlinePhone } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";




const Contacts = () => {
    const year = new Date().getFullYear();
    return (
        <section
        >
            <footer className="custom-footer-gradient rounded-t-[88px] flex flex-col items-center text-white p-8 md:p-12">
                <p className="text-2xl font-bold mb-6">CONTACT</p>
                <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12">
                    <div className="md:w-1/2 w-full"><h3 className="text-xl font-semibold mb-4">Drop a Message</h3>
                        <p className="mb-6">
                            I'm always excited to connect with new people and discuss potential projects or collaborations. Whether you have a question, need more information, or just want to say hi, feel free to reach out!
                        </p>

                        <div className="p-4 flex flex-col w-[100%] gap-y-4">
                            <Link className="flex flex-row gap-12 text-xl items-center hover:underline"><div className="bg-red-600 p-4 rounded-xl "><HiOutlinePhone /></div> +254700 347329</Link>
                            <Link className="flex flex-row gap-12 text-xl items-center hover:underline"><div className="bg-red-600 p-4 rounded-xl"><CiMail /> </div>Dondadi.fn@gmail.com</Link>
                            <Link className="flex flex-row gap-12 text-xl items-center hover:underline"><div className="bg-red-600 p-4 rounded-xl"><CiLocationOn /></div> Nairobi, Kenya</Link>
                            <p className='mt-4'>Find us on our social networks</p>
                            <div className='flex flex-row  my-5 gap-2'>
                                <a
                                    href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-4 rounded-xl hover:bg-red-500 "><FaFacebookF /></a>
                                <a
                                    href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-4 rounded-xl hover:bg-red-500"><FaInstagram /></a>
                                <a
                                    href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-4 rounded-xl hover:bg-red-500"><FaTiktok /></a>
                                <a
                                    href="https://x.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-4 rounded-xl hover:bg-red-500 "><FaXTwitter /></a></div>
                        </div>

                    </div>

                    <div className="flex flex-col bg-red-600 p-6 rounded-lg md:w-1/2 w-full">
                        <form action="" className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 rounded-md" />
                            <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md" />
                            <textarea name="" id="" placeholder="Your Message" className="w-full p-2 rounded-md h-32 resize-none"></textarea>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-colors duration-300">SEND</button>
                        </form>
                    </div>
                </div>

                <div className=" p-2 text-lg gap-4 mt-6 self-center border-2 rounded-lg">
                    <p>{year} DON . All rights reserved.</p>


                </div>
            </footer>
        </section>
    )
}

export default Contacts