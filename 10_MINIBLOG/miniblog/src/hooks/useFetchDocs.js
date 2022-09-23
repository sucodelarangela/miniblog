import { useState, useEffect } from "react";
import { db } from '../firebase/config';
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocs = (docCollection, search = null, uid = null) => {
    const [docs, setDocs] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    // dealing with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            // if it's cancelled, stops the execution
            if (cancelled) return;

            // sets loading true while fetching data
            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let q;

                // query the collection ordered by date of creation in descending order
                q = await query(collectionRef, orderBy('createdAt', 'desc'));

                // onSnapshot maps the data and updates whenever some data is changed.
                // querySnapshot is a method from firebase
                await onSnapshot(q, (querySnapshot) => {
                    setDocs(
                        // mapping and bringing the docs
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id, //id
                            ...doc.data() //title, image, body, tags
                        }))
                    );
                });

                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);

                setLoading(false);
            }
        }

        // executing the function
        loadData();
    }, [docCollection, search, uid, cancelled]);

    // cleaning memmory
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { docs, loading, error };
};
