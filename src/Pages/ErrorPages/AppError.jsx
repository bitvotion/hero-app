import React from 'react';
import appError from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppError = () => {

    const navigate = useNavigate()

    return (
        <div className=' flex items-center justify-center mx-auto max-w-[1536px] '>
            <div className='flex flex-col justify-center items-center gap-6' >
                <img src={appError} alt="" />

                <h1 className=' text-5xl font-bold text-[#001931] text-center' >OPPS!! APP NOT FOUND</h1>

                <p className=' text-xl text-[#627382] text-center '>The App you are requesting is not found on our system.  please try another apps</p>

                <button
                    onClick={() => navigate(-1)}
                    className='text-white btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-4 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative '>
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default AppError;