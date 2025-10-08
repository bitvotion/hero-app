import React, { useEffect, useState } from 'react';
import useAppsData from '../Hooks/useAppsData';
import { getInstalledApps } from '../utilities/addToLS';
import Loader from '../Components/Loader/Loader';
import InstalledAppCard from '../Components/AppCard/installedAppCard';

const Installation = () => {

    const { apps, loading } = useAppsData();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const installedAppsId = getInstalledApps()
        // const installedAppsId = installedAppsIdSTR.map(id => parseInt(id))

        const newInstalledApps = apps.filter(app => installedAppsId.includes(app.id))

        setInstalledApps(newInstalledApps)
    }, [apps])

    if (loading) {
        return <Loader />
    }



    return (
        <div className=' max-w-[1536px] mx-auto ' >
            <div>
                <h1 className=' text-5xl font-bold text-[#001931] text-center mb-4 ' >Your Installed Apps</h1>

                <p className=' text-xl text-[#627382] text-center mb-10 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className=' flex justify-between items-center mb-4 ' >
                <h2 className='font-semibold text-2xl text-[#001931] ' >
                    {
                        installedApps.length <= 1
                        ? `${installedApps.length} App Found `
                        : `${installedApps.length} Apps Found`
                    }
                </h2>
                <h2>sort</h2>
            </div>
            <div>
                {
                    installedApps.map(installedApp => <InstalledAppCard key={installedApp.id} installedApp={installedApp} setInstalledApps={setInstalledApps}  ></InstalledAppCard>)
                }
            </div>
        </div>
    );
};

export default Installation;