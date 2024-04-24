import { Element } from "react-scroll"
import { useState } from "react";
import { FaEnvelope, FaWhatsappSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import contactIMG from './Assets/contactIMG.svg'
import contact2IMG from './Assets/contact2IMG.svg'
export default function Contact() {
    return(
        <Element name="contact" className="mt-12">
            <div className="font-pFont">
                <div className="hidden lg:flex items-center justify-between">
                    <div className="hidden lg:flex items-center bg-black w-[950px] h-[120px] mt-12">
                        <h2 className="text-white lg:text-start text-[50px] ml-12 font-hFont">Contact-me</h2>
                    </div>
                    <img src={contact2IMG} alt='comunication things' className='w-[320px] mr-8 mt-10' />
                </div>
                <div className="lg:flex justify-between items-start">
                    <div className="flex flex-col">
                        <div className='w-[100%] lg:w-[450px] bg-black text-white text-center xl:m-12 lg:m-5 lg:rounded-[12px]'>
                            <h2 className="text-[40px] font-hFont pt-5 lg:hidden">Contact-me</h2>
                            <div className="flex flex-col items-center justify-center lg:mb-[70px]">
                                <p className="text-3xl mt-6 lg:font-hFont lg:text-[35px]">Send me a message</p>
                                <div className="flex flex-col items-center">
                                    <FaWhatsappSquare className="text-[55px] mt-3"/>
                                    <p className="text-3xl mt-2 ml-2">+55 62983264291</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaEnvelope className="text-[50px] mt-3"/>
                                    <p className="text-xl sm:text-2xl mt-2 ">andreluizdigitalsolutions@gmail.com</p>
                                </div>
                                <h2 className="text-[35px] mt-5">Find me on Internet</h2>
                                <div className="flex items-center justify-around mt-3 mb-[60px]">
                                    <a href="https://www.linkedin.com/in/andré-luiz-b9915b275/" target={"_blank"} rel='noreferrer'><FaLinkedin className="text-[60px] mx-10"/></a>
                                    <a href="https://github.com/AndDev741" target={"_blank"} rel='noreferrer'><FaGithub className="text-[60px] mx-10"/></a>
                                </div>
                            </div>
                        </div>
                        <img src={contactIMG} alt='people together' className='hidden lg:block mt-[100px]' />
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </Element>
    )
}

function Form() {
        let [message, letMessage] = useState('')
        const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_5a2zisj', 'template_u81irwr', e.target, 'wBGfTr7_R-MzX399d')
            .then((result) => {
                letMessage('Message sent successfully!');
            }, (error) => {
                letMessage('Error sending email, try another contact method!');
            });
            e.target.reset();
        }
    return(
        <div>
            <h1 className="text-[40px] font-hFont text-center lg:hidden mt-4 ">Send me an Email</h1>
            <form onSubmit={sendEmail} className="text-3xl font-bold mt-7 m-1 lg:flex flex-col lg:mt-12">
                <label htmlFor='name'>Name</label>
                <input id='name' required name="name" type={'text'} className='text-2xl border-b-2 border-black border-0 w-[100%] xl:w-[600px]  focus:border-black focus:ring-0 focus:outline-black mb-5 xl:mr-[100px]' />
                <label htmlFor='email'>Email</label>
                <input id='email' required name="email" type={'email'} className='text-2xl border-b-2 border-black border-0 w-[100%] xl:w-[600px] focus:border-black focus:ring-0 focus:outline-black mb-5 xl:mr-[100px]' />
                <label htmlFor="phone">Phone</label>
                <input type={'text'} required id='phone' name="number" className='text-2xl border-b-2 border-black border-0 w-[100%] xl:w-[600px] focus:border-black focus:ring-0 focus:outline-black  mb-5 xl:mr-[100px]' />
                <div className="flex flex-col items-start justify-center mb-4">
                    <label className="text-center">What work you need?</label>
                    <div className="flex flex-col lg:flex-row mt-4">
                        <div className="flex flex-col justify-center ">
                            <label className="lg:text-2xl"><input type={'checkbox'} name='webdevelopment' value='Web development' className='text-black cursor-pointer focus:outline-white w-8 h-8 lg:mr-1 text-ce xl:mr-4 mb-4' />Web development</label>
                            <label className="lg:text-2xl"><input type={'checkbox'} name='design' className='text-black cursor-pointer focus:outline-white w-8 h-8 lg:mr-1 text-ce xl:mr-4 mb-4' />Web design</label>
                        </div>
                        <div className="flex flex-col lg:flex-col lg:ml-7 ">
                             <label className="lg:text-2xl"><input type={'checkbox'} name='seo' className='text-black cursor-pointer focus:outline-white w-8 h-8 mr-1 text-ce xl:mr-4 mb-4' />SEO Strategies</label>
                            <label className="lg:text-2xl"><input type={'checkbox'} name='other' className='text-black cursor-pointer focus:outline-white w-8 h-8 mr-1 text-ce xl:mr-4 mb-4' />Other digital solutions</label>
                        </div>
                    </div>
                </div>
                <label className="mt-2" >Message</label>
                <textarea name="message" required className="text-2xl w-[100%] xl:w-[600px] h-[200px] border-black focus:border-2 focus:border-black focus:ring-0 focus:outline- xl:mr:[100px]"/>
                <div className="flex flex-col items-center justify-center mt-5">
                    <input type={'submit'} value='Send Email' className="bg-black cursor-pointer hover:scale-95 text-white p-3 w-[300px] rounded-[12px]" />
                    <p className="mt-3 underline">{message}</p>
                </div>
            </form>
            <img src={contactIMG} alt='people together' className='block lg:hidden mt-12 ' />
        </div>
    )
}