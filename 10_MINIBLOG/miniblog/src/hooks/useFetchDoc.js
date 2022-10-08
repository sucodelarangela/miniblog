// this hook uses the same structure from useFetchDocs.js, but some things were changed to fetch only one blog from database and show it on screen

import { useState, useEffect } from "react";
import { db } from '../firebase/config';
import { doc, getDoc } from "firebase/firestore"; // CHANGED

export const useFetchDoc = (docCollection, id) => { // CHANGED
    const [document, setDocument] = useState(null); //CHANGED
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    // dealing with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadDoc() { //CHANGED
            // if it's cancelled, stops the execution
            if (cancelled) return;

            // sets loading true while fetching data
            setLoading(true);

            // TRY/CATCH CHANGED
            try {
                // getting the document/blog reference
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);

                setDocument(docSnap.data());

                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(true);
            }
        }

        // executing the function
        loadDoc();
    }, [docCollection, id, cancelled]);

    // cleaning memmory
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { document, loading, error }; //CHANGED
};
