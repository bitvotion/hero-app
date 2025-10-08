import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stats from '../Components/Stats/Stats';

const Home = () => {
    return (
        <div>
            <div className='max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8'>
                <Banner />
            </div>
            <Stats />
        </div>
    );
};

export default Home;