import React from 'react';
import logo from '../../assets/loader.png'

const Loader = () => {
    return (
        <div className=' max-w-[1536px] mx-auto flex items-center justify-center' >
            <div>
                <h1 className=' text-2xl sm:text-4xl md:text-6xl lg:text-9xl font-extrabold flex gap-6 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent' >
                    L<span>
                        <img 
                        src={logo} 
                        className=' w-12  sm:w-18 md:w-24 lg:w-32 animate-spin '
                        style={{ animation: 'spin 2s linear infinite'}} 
                        />
                    </span>a d i n g
                </h1>
            </div>
        </div>
    );
};

export default Loader;