import { useState, useEffect } from 'react';
import axios from 'axios';

const host = "https://pizza-and-desserts.p.rapidapi.com";

// const headers = {
//     "x-rapidapi-key": "44fccb3027msh5cb272c5d09a6ddp1b09aejsn744658fb6df1",
//     "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
// };
const headers = {
    "x-rapidapi-key": "7daec3e5a5mshc901b92b6dc860cp1f78f6jsndab0af666e34",
    "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
};
// const headers = {
//     "x-rapidapi-key": "3dd9e03010mshf22dca0ab745c75p1e8fb2jsn46657c7d4d1d",
//     "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
// };


// const headers = {
//     "x-rapidapi-key": "61be99bf57mshc52c1dae1e4f9e1p124842jsn460a8ae0de98",
//     "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
// };

const useCallApi = ({ url }: { url: string }) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${host}/${url}`, { headers });
                setData(response.data);
            } catch (err) {
                setError("Error from API");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useCallApi;
