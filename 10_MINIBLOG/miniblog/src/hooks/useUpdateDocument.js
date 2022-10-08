import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
// collection is how tables are called in Firebase
// addDoc is a method to save new entries
// Timestamp to save time and date for new entries

// initial state for reducer
const initialState = {
    loading: null,
    error: null
};

// reducer
const updateReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null };
        case 'UPDATE_DOC':
            return { loading: false, error: null };
        case 'ERROR':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// exporting the hook to save new docs
export const useUpdateDocument = (docCollection) => {
    // dispatch is the function we want to execute in our reducer, which will be updateReducer
    const [response, dispatch] = useReducer(updateReducer, initialState);

    // dealing with memory leak
    const [cancelled, setCancelled] = useState(false);
    // before doing any action, check if it's cancelled
    const checkCancelBeforeDispatch = (action) => {
        // if it's not cancelled, execute the action
        if (!cancelled) {
            dispatch(action);
        }
    };

    // function to update document
    const updateDocument = async (id, data) => {
        checkCancelBeforeDispatch({
            type: 'LOADING'
        });

        try {
            const docRef = await (doc(db, docCollection, id));

            const updatedDocument = await updateDoc(docRef, data);

            checkCancelBeforeDispatch({
                type: 'INSERTED_DOC',
                payload: updatedDocument
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

    return { updateDocument, response };
};