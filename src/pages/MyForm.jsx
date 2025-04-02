import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const MyForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const serviceID = 'service_gdss23p';  // Your service ID
        const templateID = 'template_ythnd3t';  // Your template ID
        const userID = 'sqlVEIsWI5psNTm43';  // Your user ID
        console.log(data.email);
        // Use EmailJS to send email
        emailjs.send(serviceID, templateID, data, userID)
            .then((response) => {
                console.log('EMAIL SENT SUCCESSFULLY!', response);
                reset();  // Reset the form after successful submission
            })
            .catch((err) => {
                console.error('FAILED SENDING EMAIL...', err);  // Log any errors
            });

    };


    return (

        <div className="flex flex-col bg-red-600 md:p-6 p-4 rounded-lg md:w-1/2 w-full text-black">

            <form
                onSubmit={handleSubmit(onSubmit)}
                action="" className="space-y-4">
                <input
                    {...register('name', { required: true })}
                    type="text" placeholder="Your Name" className="w-full p-2 rounded-md" />
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address'
                        }
                    })}
                    type="email" placeholder="Your Email" className="w-full p-2 rounded-md" />
                {errors.message && <div className="text-white">{errors.message}</div>}

                <textarea
                    {...register('message', {
                        required: 'Message is required',

                    })}
                    placeholder="Your Message" className="w-full p-2 rounded-md h-32 resize-none"></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-colors duration-300">SEND</button>
            </form>
        </div>
    )
}

export default MyForm