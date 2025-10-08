import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className=' bg-white shadow-sm '>
            <nav className="navbar max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/' >Home</NavLink></li>
                            <li><NavLink to='/apps' >Apps</NavLink></li>
                            <li><NavLink to='/installed-app' >Installation</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/">
                        <div className='flex items-center gap-2 '>
                            <img
                                src={logo}
                                alt="Logo"
                                className='h-10'
                            />
                            <h2 className=' font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ' >HERO.IO</h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 font-medium ">
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/apps' >Apps</NavLink></li>
                        <li><NavLink to='/installed-app' >Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href='https://github.com/bitvotion'
                        target='_blank'
                        rel='noopener noreferrer'
                    >

                        <button className='text-white btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-4 rounded-sm border-none '>
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