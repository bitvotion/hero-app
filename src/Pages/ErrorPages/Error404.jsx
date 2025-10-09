import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import error404 from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const Error404 = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className=' flex items-center justify-center mx-auto max-w-[1536px] my-20 '>
                <div className='flex flex-col justify-center items-center gap-6' >
                    <img src={error404} alt="" />

                    <h1 className=' text-5xl font-bold text-[#001931] text-center' >Oops, page not found!</h1>

                    <p className=' text-xl text-[#627382] text-center '>The page you are looking for is not available.</p>

                    <button
                        onClick={() => navigate(-1)}
                        className='text-white btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-4 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative '>
                        Go Back!
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Error404;