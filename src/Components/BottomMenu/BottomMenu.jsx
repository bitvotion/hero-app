import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoLogoGithub } from "react-icons/io5";
import ScrollToTop from '../../utilities/ScrollToTop';
import { GoHome } from 'react-icons/go';
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineInstallDesktop } from "react-icons/md";

const BottomMenu = () => {
    return (
        <div className='bottom-menu-small bg-white fixed bottom-0 md:hidden shadow-smz-[9999] w-full p-2 '>
            <div className="flex justify-evenly max-w-3xl mx-auto text-xs gap-2">
                <NavLink to='/' className=' relative hover:bg-gray-100 border-[#632EE3] flex justify-center items-center py-2 w-full rounded-sm transition-all duration-100 ease-in-out' >
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <GoHome className='text-3xl' />
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to='/apps' className=' relative hover:bg-gray-100 border-[#632EE3] flex justify-center items-center py-2 w-full rounded-sm transition-all duration-100 ease-in-out' >
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <AiOutlineAppstore className='text-3xl' />
                        <p>Apps</p>
                    </div>
                </NavLink>
                <NavLink to='/installed-app' className=' relative hover:bg-gray-100 border-[#632EE3] flex justify-center items-center py-2 w-full rounded-sm transition-all duration-100 ease-in-out' >
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <MdOutlineInstallDesktop className='text-3xl' />
                        <p>Installation</p>
                    </div>
                    </NavLink>
            </div>
        </div>
    );
};

export default BottomMenu;