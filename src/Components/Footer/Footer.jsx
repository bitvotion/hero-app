import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-white' >
            <div className=' max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8 '>
                <div className='relative flex items-center flex-col-reverse lg:flex-row justify-around py-10 ' >
                    <div className='pt-20 lg:pt-0' >
                        <fieldset className="w-80">
                            <label className=' text-gray-800 ' >Join As Developer</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@email.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-none px-5 ">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                    <div className='absolute mt-10 lg:mt-0 w-4/5 lg:w-0 lg:h-4/5 border border-gray-100 ' ></div>
                    <div className=' flex items-center gap-6 mb-10 md:mb-0 ' >
                        <img
                            src={logo}
                            className=' h-16 md:h-20 lg:h-25 '
                        />
                        <h2 className='text-5xl font-extrabold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>BitVotion.IO</h2>
                    </div>
                </div>

                <div className=' max-w-[1536px] mx-auto flex justify-center gap-8 p-4 ' >
                    <a
                        href="https://www.instagram.com/_ddhrubb_/"
                        target='_blank'
                        className=' group flex items-center space-x-2 transition-all '>

                        <div className=' hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 hover:text-white rounded-full transition-transform duration-300 group-hover:scale-125 ' >
                            <FaInstagram />
                        </div>
                    </a>
                    <a
                        href="https://www.facebook.com/ahm.sakif24/"
                        target='_blank'
                        className=' group flex items-center space-x-2 transition-all '>

                        <div className=' hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 hover:text-white rounded-full transition-transform duration-300 group-hover:scale-125 ' >
                            <FaFacebook />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sakif-ahmed-9b50881a9/"
                        target='_blank'
                        className=' group flex items-center space-x-2 transition-all '>

                        <div className=' hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 hover:text-white rounded-full transition-transform duration-300 group-hover:scale-125 ' >
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a
                        href="https://github.com/bitvotion"
                        target='_blank'
                        className=' group flex items-center space-x-2 transition-all '>

                        <div className=' hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 hover:text-white rounded-full transition-transform duration-300 group-hover:scale-125 ' >
                            <IoLogoGithub />
                        </div>
                    </a>
                </div>

                <hr className=' text-gray-200 ' />

                <div className=' flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-center justify-between py-3 text-gray-500 text-sm '>
                    <ul className=' flex items-center flex-wrap gap-4  ' >
                        <li className=' hover:text-gray-900 cursor-pointer ' >Terms of Service</li>
                        <li className=' hover:text-gray-900 cursor-pointer ' >Privacy</li>
                        <li className=' hover:text-gray-900 cursor-pointer ' >About</li>
                        <li className=' hover:text-gray-900 cursor-pointer ' >Developers</li>
                        <li className=' hover:text-gray-900 cursor-pointer ' ><Link to="/apps" >Hero App Store</Link></li>
                    </ul>
                    <p className=' hover:text-gray-900 cursor-pointer ' >United States (English) </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;