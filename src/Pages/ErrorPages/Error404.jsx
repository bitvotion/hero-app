import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import error404 from '../../assets/error-404.png'

const Error404 = () => {
    return (
        <div>
            <Navbar />
            <div className=' flex items-center justify-center mx-auto max-w-[1536px] '>
                <img src={error404} alt="" />
            </div>
            <Footer />           
        </div>
    );
};

export default Error404;