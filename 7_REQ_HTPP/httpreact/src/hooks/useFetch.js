import { useState, useEffect } from "react";

export const useFetch = (url) => {
    // data we receive from the api
    const [data, setData] = useState(null);

    // making requisitions from api
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        };

        fetchData();
    }, [url]); // url as dependency array: when this url changes we execute useEffect again

    // we are exporting the useFetch hook, but we also need to export the data requested from the api. In this case, we use return:
    return { data };
};