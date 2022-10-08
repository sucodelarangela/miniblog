// this hook uses the same structure from useInsertDocument.js, but some things were changed to fetch only one blog from database and show it on screen
import { db } from '../firebase/config';
import { useState, useEffect, useReducer } from "react";
import { doc, deleteDoc } from "firebase/firestore";
// collection is how tables are called in Firebase
// addDoc is a method to save new entries
// Timestamp to save time and date for new entries

// initial state for reducer
const initialState = {
    loading: null,
    error: null
};

// reducer
const deleteReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null };
        case 'DELETED_DOC':
            return { loading: false, error: null };
        case 'ERROR':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// exporting the hook to save new docs
export const useDeleteDocument = (docCollection) => {
    // dispatch is the function we want to execute in our reducer, which will be insertReducer
    const [response, dispatch] = useReducer(deleteReducer, initialState);

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
    const deleteDocument = async (id) => {
        checkCancelBeforeDispatch({
            type: 'LOADING'
        });

        try {
            const deletedDoc = await deleteDoc(doc(db, docCollection, id));

            checkCancelBeforeDispatch({
                type: 'DELETED_DOC',
                payload: deletedDoc
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

    return { deleteDocument, response };
};