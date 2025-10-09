import React from 'react';


const Stats = () => {
    return (
        <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-20 mb-40 animate-fade-in-scale '>
            <div className=' max-w-[1536px] mx-auto ' >
                <h1 className=' text-center text-5xl font-bold mb-10 ' >Trusted by Millions, Built for You</h1>

                <div className=' flex justify-center items-center flex-col md:flex-row gap-10 md:gap-25 '>
                    <div className=' flex flex-col gap-4 justify-center text-center animate-fade-up-scale5s '>
                        <p>Total Downloads</p>
                        <h1 className=' font-extrabold text-[64px] '>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className=' flex flex-col gap-4 justify-center text-center animate-fade-up-scale8s '>
                        <p>Total Reviews</p>
                        <h1 className=' font-extrabold text-[64px] '>906K</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className=' flex flex-col gap-4 justify-center text-center animate-fade-up-scale11s '>
                        <p>Active Apps</p>
                        <h1 className=' font-extrabold text-[64px] '>132+</h1>
                        <p>21% more than last month</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Stats;