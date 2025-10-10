import React from 'react';

const SkeletonLoader = (count = 8) => {
    return (
        <div className='Apps-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>

            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                    <div className="skeleton h-86 w-full"></div>
                    <div className="skeleton h-6 w-28"></div>
                    <div className="skeleton h-6 w-full"></div>
                </div>
            ))}

        </div>
    );
};

export default SkeletonLoader;