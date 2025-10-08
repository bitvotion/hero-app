import React from 'react';
import playstorelogo from '../../assets/playstore.png'
import appstorelogo from '../../assets/appstore.png'
import heroimage from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className=' flex flex-col justify-center items-center text-center'>
            <h1 className=' text-[#001931] text-7xl font-bold mb-4 ' >
                We Build
                <br />
                <span className=' font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ' >Productive </span>
                Apps
            </h1>
            <p className=' text-[#627382] text-xl ' >At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='my-10 text-xl text-[#001931] font-semibold flex items-center gap-4 ' >
                <a href="">
                    <button className='btn border-[#d2d2d2] px-8 py-6 rounded-sm '>
                        <img src={playstorelogo} className='h-7' /> Google Play
                        </button>
                    </a>
                <a href="">
                    <button className='btn border-[#d2d2d2] px-8 py-6 rounded-sm '>
                        <img src={appstorelogo} className='h-7' /> App Store
                        </button>
                    </a>
            </div>
            <img src={heroimage} alt="Hero Image" />
        </div>
    );
};

export default Banner;