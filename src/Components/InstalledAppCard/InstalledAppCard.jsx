import React from 'react';
import dwnldicon from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { uninstallApp } from '../../utilities/addToLS';
import { Bounce, toast } from 'react-toastify';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";


const InstalledAppCard = ({ installedApp, setInstalledApps }) => {
    const { image, title, size, downloads, ratingAvg, id } = installedApp

    const handleUninstall = (appId) => {
        uninstallApp(appId)
        setInstalledApps(prev => prev.filter(p => p.id !== appId))

        toast.success(`${title} uninstalled successfully`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,


        });

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
        <Link to={`/app/${id}`} >
            <div className=' bg-white p-4 flex justify-between items-center my-4 rounded-sm ' >
                <div className='flex justify-between sm:justify-start items-center sm:gap-8 w-full ' >
                    <div className=' sm:w-20 sm:h-20 w-16 overflow-hidden rounded-lg '>
                        <img
                            src={image}
                            className='sm:w-20 sm:h-20 w-16 object-cover rounded-lg ' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-lg font-medium text-[#001931] ">{title}</h2>
                        <div className='flex font-medium gap-4 sm:gap-10'>
                            <p className='flex items-center gap-2 text-[#00D390] ' ><span><img src={dwnldicon} className='w-6 h-6' /> </span> {formatNumber(downloads)}</p>
                            <p className='flex items-center gap-2 text-[#FF8811] '><span><img src={star} className='w-6 h-6' /> </span> {ratingAvg} </p>
                            <p>{size} MB</p>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleUninstall(id)
                            }}
                            className="btn border-none py-8 px-3 bg-[#00D390] sm:hidden  ">
                            <MdDeleteForever className=' text-4xl text-white ' />
                        </button>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleUninstall(id)
                        }}
                        className="text-white gap-2 px-8 py-3 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative text-xl active:shadow-inner active:translate-y-[2px]  text-center bg-[#00D390] ">
                        Unsinstall
                    </button>

                </div>

            </div>
        </Link>

    );
};

export default InstalledAppCard;