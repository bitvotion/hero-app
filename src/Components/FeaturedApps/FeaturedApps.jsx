import React from 'react';
import useAppsData from '../../Hooks/useAppsData';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';
import Loader from '../Loader/Loader';



const FeaturedApps = () => {

    const { apps, loading } = useAppsData();
    const featuredApps = [...apps]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)

    if (loading) {
        return <Loader />
    }

    return (
        <div >

            <h1 className=' text-5xl font-bold text-[#001931] text-center mb-4 ' >Trending Apps</h1>

            <p className=' text-xl text-[#627382] text-center mb-10 '>Explore All Trending Apps on the Market developed by us</p>

            <div className='Apps-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
                {
                    featuredApps.map(app => <AppCard key={app.id} app={app} ></AppCard>)
                }
            </div>
            <div className=' mt-10 flex items-center justify-center ' >
                <Link to='/apps'>

                    <button className='text-white btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-6 py-4 rounded-sm border-none relative transition-all duration-150 ease-in-out hover:scale-105 '>
                        <h3 className='font-semibold'>Show All</h3>
                    </button>

                </Link>
            </div>
        </div>
    );
};

export default FeaturedApps;