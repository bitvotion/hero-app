import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className=' max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8 bg-[#F5F5F5] my-20 '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;