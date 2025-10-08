import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='  my-20 '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;