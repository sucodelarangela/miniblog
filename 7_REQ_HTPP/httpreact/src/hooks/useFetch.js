import { useState, useEffect } from "react";


export const useFetch = (url) => {
    // data we receive from the api, initially defined as null
    const [data, setData] = useState(null);
    // states for refactoring post method
    const [config, setConfig] = useState(null); // for headers
    const [method, setMethod] = useState(null); //GET or POST
    const [callFetch, setCallFetch] = useState(false);
    // loading state
    const [loading, setLoading] = useState(false);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method, // the same as method: "POST"
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
    };

    // making requisitions from api
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            // add fetched data to states
            setData(json);

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]); // url as dependency array: when this url changes we execute useEffect again. If we add a new data to the system, callFetch reloads the data

    // refactoring POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            }
        };

        httpRequest();
    }, [config, method, url]);

    // we are exporting the useFetch hook, but we also need to export the data requested from the api because we will use it in the future. In this case, we use return, because we can only have one export per file:
    return { data, httpConfig, loading };
};