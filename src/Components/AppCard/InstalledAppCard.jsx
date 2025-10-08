import React from 'react';
import dwnldicon from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { uninstallApp } from '../../utilities/addToLS';
import uninstallicon from '../../assets/uninstall.png'

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
            <div className='flex justify-between sm:justify-start items-center sm:gap-8 w-full ' >
                <div className=' w-20 h-20 overflow-hidden rounded-lg '>
                    <img
                        src={image}
                        className='w-20 h-20 object-cover rounded-lg ' />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className="text-lg font-medium text-[#001931] ">{title}</h2>
                    <div className='flex font-medium gap-4 sm:gap-10'>
                        <p className='flex items-center gap-2 text-[#00D390] ' ><span><img src={dwnldicon} className='w-6 h-6' /> </span> {formatNumber(downloads)} </p>
                        <p className='flex items-center gap-2 text-[#FF8811] '><span><img src={star} className='w-6 h-6' /> </span> {ratingAvg} </p>
                        <p>{size} MB</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => handleUninstall(id)}
                        className="text-white px-1 rounded-xl transition-all duration-150 ease-in-out py-4 hover:scale-105 text-xl active:shadow-inner active:translate-y-[2px] text-center bg-[#00D390] bg-clip-content sm:hidden">
                        <img src={uninstallicon} className=' w-10 rounded-xl ' />
                    </button>
                </div>
            </div>
            <div className='hidden sm:block'>
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