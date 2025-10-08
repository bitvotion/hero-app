import React from 'react';
import dwnldicon from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { uninstallApp } from '../../utilities/addToLS';

const InstalledAppCard = ({ installedApp, setInstalledApps }) => {
    const { image, title, size, downloads, ratingAvg, id } = installedApp

    const handleUninstall = (appId) => {
        uninstallApp(appId)
        setInstalledApps(prev => prev.filter(p => p.id !== appId))
    }

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 100000) {
            return (num / 100000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num;
    }

    return (
        <div className=' bg-white p-4 flex justify-between items-center my-4 rounded-sm ' >
            <div className='flex gap-8' >
                <div className=' w-20 h-20 overflow-hidden rounded-lg '>
                    <img
                        src={image}
                        className='w-20 h-20 object-cover rounded-lg ' />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className="text-lg font-medium text-[#001931] ">{title}</h2>
                    <div className='flex font-medium gap-10'>
                        <p className='flex items-center gap-2 text-[#00D390] ' ><span><img src={dwnldicon} className='w-6 h-6' /> </span> {formatNumber(downloads)} </p>
                        <p className='flex items-center gap-2 text-[#FF8811] '><span><img src={star} className='w-6 h-6' /> </span> {ratingAvg} </p>
                        <p>{size} MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button
                    onClick={() => handleUninstall(id)}
                    className="text-white gap-2 px-8 py-3 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative text-xl active:shadow-inner active:translate-y-[2px]  text-center bg-[#00D390]">
                    Unsinstall
                </button>
            </div>
        </div>
    );
};

export default InstalledAppCard;