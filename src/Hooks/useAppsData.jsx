import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAppsData = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios('/appsData.json')
            .then(data => setApps(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])
    return { apps, loading, error }

//     // useEffect(() => {
//     // const fetchApps = async () => {
//     //   try {
//     //     setLoading(true);
//     //     const response = await axios.get("/appsData.json");
//     //     setApps(response.data);
//     //   } catch (err) {
//     //     setError(err);
//     //   } finally {
//     //     setLoading(false);
//     //   }
//     // };

//     fetchApps();
//   }, []);

//   return { apps, loading, error };
};

export default useAppsData;