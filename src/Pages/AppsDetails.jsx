import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAppsData from '../Hooks/useAppsData';
import dwnldIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Loader from '../Components/Loader/Loader';
import { getInstalledApps, installIntoLS } from '../utilities/addToLS';
import { Bounce, toast} from 'react-toastify';


const AppsDetails = () => {

    const [markedInstalled, setMarkedInstalled] = useState(false);

    const { appId } = useParams();
    const newAppId = parseInt(appId)
    const { apps, loading, error } = useAppsData();

    useEffect(() => {

        const installed = getInstalledApps();

        if (installed.includes(newAppId)) {
            setMarkedInstalled(true);
        }

    }, [newAppId])

    if (loading) {
        return <Loader />
    }


    const app = apps.find(a => a.id === newAppId);

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;



    const handleInstalled = (id) => {

        const installed = installIntoLS(id);

        if (installed) {
            setMarkedInstalled(true)

            toast.success(`${title} installed successfully`, {
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
        <div className=' max-w-[1536px] mx-auto px-2 sm:px-4 md:px-5 lg:px-8 animate-fade-up-scale5s ' >
            <div className='flex flex-col md:flex-row '>
                <div className='overflow-hidden flex gap-4 ' >
                    <img
                        src={image}
                        alt={title}
                        className='md:w-85 md:h-85 h-30 object-cover'
                    />
                    <div className='md:hidden' >
                        <h1 className="text-[32px] font-bold mb-2 w-full ">
                            {title}
                        </h1>
                        <p>Developed by <span className=' text-xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ' > {companyName} </span></p>
                    </div>
                </div>
                <div className=' md:pl-10 w-2/3 md:3/4 flex flex-col justify-between'>
                    <h1 className="text-[32px] font-bold mb-2 w-full hidden md:block ">
                        {title}
                    </h1>
                    <p className=' hidden md:block' >Developed by <span className=' text-xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ' > {companyName} </span></p>

                    <hr className='my-6 text-[#00193120] ' />

                    <div className=' flex justify-around md:justify-start scale-95 md:scale-100 gap-2 text-[#001931] mb-3 ' >
                        <div className='flex items-center md:items-start flex-col md:block' >
                            <img src={dwnldIcon} className='w-10  mb-2' />
                            <p className=' md:mb-2  '>Downloads</p>
                            <h2 className='text-3xl md:text-[40px] font-extrabold ' >{formatNumber(downloads)}</h2>
                        </div>

                        <div className='flex items-center md:items-start flex-col md:block'>
                            <img src={ratingIcon} className='w-10  mb-2' />
                            <p className=' md:mb-2  '>Average Ratings</p>
                            <h2 className=' text-3xl md:text-[40px] font-extrabold ' >{ratingAvg}</h2>
                        </div>

                        <div className='flex items-center md:items-start flex-col md:block'>
                            <img src={reviewIcon} className='w-10 mb-2' />
                            <p className=' md:mb-2  '>Total Reviews</p>
                            <h2 className=' text-3xl md:text-[40px] font-extrabold ' >{formatNumber(reviews)}</h2>
                        </div>
                    </div>

                    <button
                        onClick={() => handleInstalled(newAppId)}
                        disabled={markedInstalled}
                        className={`text-white gap-2 px-5 py-3 rounded-sm border-none transition-all duration-150 ease-in-out hover:scale-105 relative text-xl active:shadow-inner active:translate-y-[2px] w-60 text-center 
                            ${markedInstalled
                                ? 'bg-gray-500 cursor-not-allowed'
                                : 'bg-[#00D390]'
                            } `} 
                             >
                        {
                            markedInstalled
                                ? `Installed`
                                : `Install Now (${size} MB)`
                        }
                    </button>
                </div>
            </div>

            <hr className='my-10 text-[#00193120] ' />

            <div className=' hidden md:block ' >
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={ratings}
                        layout='vertical'
                        margin={{ top: 0, right: 30, left: 30, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type='number' />
                        <YAxis type="category" dataKey="name" reversed />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8811" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className=' md:hidden ' >
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={ratings}
                        layout='horizontal'
                        margin={{ top: 0, right: 30, left: 30, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis type='number' />
                        <XAxis type="category" dataKey="name" reversed />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8811" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <hr className='my-10 text-[#00193120] ' />

            <h2 className=' font-semibold text-2xl text-[#001931] mb-6 ' >Description</h2>
            <p className=' text-xl text-[#627382] ' >{description}</p>

        </div>
    );
};

export default AppsDetails;