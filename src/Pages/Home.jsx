import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stats from '../Components/Stats/Stats';
import FeaturedApps from '../Components/FeaturedApps/FeaturedApps';
import Loader from '../Components/Loader/Loader';

const Home = () => {
    return (
        <div>
            <div className='max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8'>
                <Banner />
            </div>
            <Stats />
            <div className='max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8'>
                <FeaturedApps />
            </div>
        </div>
    );
};

export default Home;