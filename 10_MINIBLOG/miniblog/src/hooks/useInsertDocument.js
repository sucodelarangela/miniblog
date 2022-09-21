import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from "firebase/firestore";
// collection is how tables are called in Firebase
// addDoc is a method to save new entries
// Timestamp to save time and date for new entries

// initial state for reducer
const initialState = {
    loading: null,
    error: null
};

// reducer
const insertReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null };
        case 'INSERTED_DOC':
            return { loading: false, error: null };
        case 'ERROR':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// exporting the hook to save new docs
export const useInsertDocument = (docCollection) => {
    // dispatch is the function we want to execute in our reducer, which will be insertReducer
    const [response, dispatch] = useReducer(insertReducer, initialState);

    // dealing with memory leak
    const [cancelled, setCancelled] = useState(false);
    // before doing any action, check if it's cancelled
    const checkCancelBeforeDispatch = (action) => {
        // if it's not cancelled, execute the action
        if (!cancelled) {
            dispatch(action);
        }
    };

    // function to insert document
    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            type: 'LOADING'
        });

        try {
            // gets the new document, adds data we received in the function and add a timestamp as an object
            const newDocument = { ...document, createdAt: Timestamp.now() };
            // saves the new document to db
            const insertedDocument = await addDoc(
                // search in the db the docCollection informed and save the newDocument in it
                collection(db, docCollection),
                newDocument
            );

            checkCancelBeforeDispatch({
                type: 'INSERTED_DOC',
                payload: insertedDocument
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message
            });
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { insertDocument, response };
};