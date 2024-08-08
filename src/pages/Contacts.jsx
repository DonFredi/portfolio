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
                    <div className="md:w-1/2 w-full">
                        <h3 className="text-xl font-semibold mb-4">Drop a message</h3>
                        <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ab laudantium sapiente obcaecati molestias atque dolore nisi temporibus nostrum doloremque. Commodi tempore quas accusantium blanditiis porro voluptates molestiae velit quia.</p>
                        <div className="p-4 flex flex-col w-[100%] gap-y-4">
                            <Link className="flex flex-row gap-12 text-xl items-center hover:underline"><div className="bg-red-600 p-4 rounded-xl "><HiOutlinePhone /></div> +254700 347329</Link>
                            <Link className="flex flex-row gap-12 text-xl items-center hover:underline"><div className="bg-red-600 p-4 rounded-xl"><CiMail /> </div>Dondadi.fn@gmail.com</Link>
                            <Link className="flex flex-row gap-12 text-xl items-center hover:underline"><div className="bg-red-600 p-4 rounded-xl"><CiLocationOn /></div> Nairobi, Kenya</Link>
                        </div>
                    </div>
                    <div className="font-semibold "></div>
                    <div className="flex flex-col bg-red-600 p-6 rounded-lg md:w-1/2 w-full">
                        <form action="" className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 rounded-md" />
                            <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md" />
                            <textarea name="" id="" placeholder="Your Message" className="w-full p-2 rounded-md h-32 resize-none"></textarea>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-colors duration-300">SEND</button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-around p-2 text-lg gap-4 my-6 items-center border-2 rounded-lg">
                    <p>{year} DON . All rights reserved.</p>
                    <div className='flex flex-row gap-2'>
                        <div className="bg-red-600 p-4 rounded-xl "><FaFacebookF /></div>
                        <div className="bg-red-600 p-4 rounded-xl "><FaInstagram /></div>
                        <div className="bg-red-600 p-4 rounded-xl "><FaTiktok /></div>
                        <div className="bg-red-600 p-4 rounded-xl "><FaXTwitter /></div></div>

                </div>
            </footer>
        </section>
    )
}

export default Contacts