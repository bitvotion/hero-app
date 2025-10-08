import React from 'react';
import downloadicon from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { id, title, image, downloads, ratingAvg } = app;

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
            <div className=' p-4 bg-white rounded-sm font-medium flex flex-row md:flex-col shadow-lg relative hover:scale-105 transition-all duration-200 ease-in-out ' >
                <div className=' bg-[#D9D9D9] rounded-lg md:mb-4 w-1/5 md:w-full mr-4 ' >
                    <img
                        src={image}
                        alt={title}
                        className=' w-full object-cover rounded-lg '
                    />
                </div>
                <div className=' flex flex-col justify-between w-4/5 md:w-full '>
                    <h1 className=' line-clamp-1 md:mb-4 text-[#001931] text-xl md:text-[16px] ' >{title}</h1>
                    <div className=' flex justify-between ' >
                        <div className=' bg-[#F1F5E8] rounded-sm py-1.5 px-2.5 flex items-center gap-1 text-[#00D390] ' ><img src={downloadicon} className='w-4' /><p>{formatNumber(downloads)}</p></div>

                        <div className=' bg-[#FFF0E1] rounded-sm py-1.5 px-2.5 flex items-center gap-1 text-[#FF8811] ' ><img src={star} className='w-4' /><p>{ratingAvg}</p></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;