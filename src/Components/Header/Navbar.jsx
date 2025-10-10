import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io5";
import ScrollToTop from '../../utilities/ScrollToTop';

const Navbar = () => {
    return (
        <div className=' bg-white shadow-sm sticky top-0 z-[9999] '>
            <nav className="navbar max-w-[1536px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 ">
                <div className="navbar-start">
                    <Link to="/" onClick={() => ScrollToTop()}  >
                        <div className='flex items-center gap-2 '>
                            <img
                                src={logo}
                                alt="Logo"
                                className='h-10'
                            />
                            <h2 className=' font-bold text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ' >BitVotion.IO</h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="flex items-center gap-8 font-medium ">
                        <li className='relative hover:border-2 border-[#632EE3] hover:px-4 py-1 rounded-sm transition-all duration-100 ease-in-out' >
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='relative hover:border-2 border-[#632EE3] hover:px-4 py-1 rounded-sm transition-all duration-100 ease-in-out ' >
                            <NavLink to='/apps' >Apps</NavLink>
                        </li>
                        <li className='relative hover:border-2 border-[#632EE3] hover:px-4 py-1 rounded-sm transition-all duration-100 ease-in-out ' >
                            <NavLink to='/installed-app' >Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href='https://github.com/bitvotion'
                        target='_blank'
                        rel='noopener noreferrer'
                    >

                        <button className='text-white btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-4 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative '>
                            <IoLogoGithub />
                            <h3 className='font-semibold'>Contribute</h3>
                        </button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;