import React, { useEffect, useState } from 'react';
import useAppsData from '../Hooks/useAppsData';
import { getInstalledApps } from '../utilities/addToLS';
import Loader from '../Components/Loader/Loader';
import InstalledAppCard from '../Components/InstalledAppCard/InstalledAppCard';
import NoApp from '../Components/NoApp/NoApp';

const Installation = () => {

    const { apps, loading, error } = useAppsData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const installedAppsId = getInstalledApps()
        const newInstalledApps = apps.filter(app => installedAppsId.includes(app.id))

        setInstalledApps(newInstalledApps)
    }, [apps])

    const sortedItem = (() => {
        if (sortOrder === 'download-asc') {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === "download-desc") {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installedApps
        }
    })()

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <NoApp message="NO DATA FOUND" />
    }


    return (
        <div className=' max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8 animate-fade-up-scale5s '>
            <div>
                <h1 className=' text-5xl font-bold text-[#001931] text-center mb-4 ' >Your Installed Apps</h1>

                <p className=' text-xl text-[#627382] text-center mb-10 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className=' flex justify-between items-center mb-4 ' >
                <h2 className='font-semibold md:text-2xl text-[#001931] ' >
                    {
                        installedApps.length <= 1
                            ? `${installedApps.length} App Found `
                            : `${installedApps.length} Apps Found`
                    }
                </h2>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className="select select-bordered"
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort by downloads</option>
                        <option value="download-asc">Low to High</option>
                        <option value="download.desc">High to Low</option>
                    </select>

                </label>
            </div>
            <div className=' px-2 ' >
                {
                    !sortedItem.length
                        ? <NoApp message="No Installed App Found..!!" />
                        : sortedItem.map(installedApp => <InstalledAppCard key={installedApp.id} installedApp={installedApp} setInstalledApps={setInstalledApps}  ></InstalledAppCard>)
                }
            </div>
        </div>
    );
};

export default Installation;