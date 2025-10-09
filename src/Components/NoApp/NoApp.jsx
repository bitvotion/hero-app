import React from 'react';
import { Link } from 'react-router';

const NoApp = () => {
    return (
        <div className=' flex flex-col justify-center items-center text-center my-20'>
            <h1 className=' text-[#001931] text-5xl md:text-7xl font-bold mb-4 animate-fade-in-scale opacity-80 ' >
                No Installed App Found..!!
            </h1>
            <p className=' text-xl text-[#627382] text-center my-10 '>Install to Explore our App</p>

            <Link
                to='/apps'
                className={'text-white btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-4 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative '}>
                Install our App
            </Link>
        </div>
    );
};

export default NoApp;