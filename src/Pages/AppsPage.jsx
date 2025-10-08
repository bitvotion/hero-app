import React, { useState } from 'react';
import useAppsData from '../Hooks/useAppsData';
import AppCard from '../Components/AppCard/AppCard';
import Loader from '../Components/Loader/Loader';
import AppError from './ErrorPages/AppError';

const AppsPage = () => {

    const { apps, loading } = useAppsData();
    const [search, setSearch] = useState("")
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term
        ? apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term)
        )
        : apps


    // if (loading) {
    //     return <Loader />
    // }

    return (
        <div className=' max-w-[1536px] mx-auto ' >
            <div>
                <h1 className=' text-5xl font-bold text-[#001931] text-center mb-4 ' >Our All Applications</h1>

                <p className=' text-xl text-[#627382] text-center mb-10 '>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className=' flex justify-between items-center mb-4 ' >
                <h2 className='font-semibold text-2xl text-[#001931] ' >
                    ({searchedApps.length}) Apps Found
                </h2>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type="search"
                            required
                            placeholder="Search Apps"
                        />
                    </label>
                </div>
            </div>
            {
                loading
                    ? (<Loader />)
                    : searchedApps.length === 0 ?
                        (<AppError className={`animate-rise`} />)
                        : (
                            <div className='Apps-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
                                {
                                    searchedApps.map(app => <AppCard key={app.id} app={app} ></AppCard>)
                                }
                            </div>
                        )
            }
        </div>
    );
};

export default AppsPage;