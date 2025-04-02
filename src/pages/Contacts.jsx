import React from 'react'
import { HiOutlinePhone } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import MyForm from './MyForm';




const Contacts = () => {
    const year = new Date().getFullYear();
    return (
        <section className='custom-footer-gradient '>
            <a href="#about-me" className='underline hover:no-underline p-2 text-white w-fit'>Back to top</a>
            <footer className=" flex flex-col items-center text-white p-2 md:p-10">

                <p className="text-white font-semibold text-3xl my-4">CONTACT ME</p>
                <div className="flex flex-col md:flex-row justify-between w-[90%] gap-8 md:gap-12">
                    <div className="md:w-1/2 w-full"><h3 className="text-xl font-semibold mb-4">Drop me a message</h3>
                        <p className="mb-6">
                            I'm always excited to connect with new people and discuss potential projects or collaborations. Whether you have a question, need more information, or just want to say hi, feel free to reach out!
                        </p>

                        <div className="flex flex-col w-fit gap-y-4">
                            <a
                                href={import.meta.env.DON_PHONE}
                                rel="noreferrer noopener"
                                className="flex flex-row gap-3 text-xl items-center hover:underline"><div className="bg-red-600 p-2 rounded-xl "><HiOutlinePhone /></div> 0700 347 329</a>
                            <a
                                href="mailto://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDQthXNcFpXzZhldPbVJbkbckRMfxfVmDSthXDLKsXWwscwmQXMfscqfCzzHQhCRfTXLSL"
                                rel="noreferrer noopener"
                                className="flex flex-row gap-3 text-xl items-center hover:underline"><div className="bg-red-600 p-2 rounded-xl"><CiMail /> </div>Dondadi.fn@gmail.com</a>
                            <a
                                rel="noreferrer noopener"
                                className="flex flex-row gap-3 text-xl items-center hover:underline"><div className="bg-red-600 p-2 rounded-xl"><CiLocationOn /></div> Nairobi, Kenya</a>
                            <p className='mt-4'>Find me on my social networks</p>
                            <div className='flex flex-row  my-3 gap-2'>
                                <a
                                    href={import.meta.env.VITE_DON_WHATSAPP} target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-3 rounded-xl hover:bg-red-500 "><FaWhatsapp /></a>

                                <a
                                    href={import.meta.env.VITE_DON_TIKTOK} target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-3 rounded-xl hover:bg-red-500"><FaTiktok /></a>
                                <a
                                    href={import.meta.env.VITE_DON_X} target="_blank" rel="noopener noreferrer"
                                    className="bg-red-600 p-3 rounded-xl hover:bg-red-500 "><FaXTwitter /></a></div>
                        </div>

                    </div>
                    <MyForm />
                </div>

                <div className=" p-2 text-lg gap-4 mt-10 self-center border-2 rounded-lg mb-0">
                    <p>{year} DON . All rights reserved.</p>


                </div>
            </footer>
        </section>
    )
}

export default Contacts