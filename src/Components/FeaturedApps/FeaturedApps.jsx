import React from 'react';
import useAppsData from '../../Hooks/useAppsData';
import AppCard from '../AppCard/AppCard';



const FeaturedApps = () => {

    const { apps, loading } = useAppsData();
    const featuredApps = [...apps]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)

    return (
        <div className=' max-w-[1536px] mx-auto ' >

            <div className='Apps-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
                {
                    featuredApps.map(app => <AppCard key={app.id} app={app} ></AppCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedApps;