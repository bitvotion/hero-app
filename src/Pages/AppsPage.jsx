import React from 'react';
import useAppsData from '../Hooks/useAppsData';
import AppCard from '../Components/AppCard/AppCard';

const AppsPage = () => {

    const {apps, loading} = useAppsData();

    return (
        <div className=' max-w-[1536px] mx-auto ' >
            <div>
                <h1>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className=' flex justify-between items-center ' >
                <h2>(12) Apps Found</h2>
                <div>Search here</div>
            </div>
            <div className='Apps-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
                {
                    apps.map(app => <AppCard key={app.id} app={app} ></AppCard>)
                }
            </div>
        </div>
    );
};

export default AppsPage;