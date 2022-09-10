// import database so our app understands we have firebase
import { db } from '../firebase/config';

// importing functions from Firebase Authentication
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup: as we're constantly changing components in our page, we need to avoid having remnants of saved info in the browser to avoid memory leak
    // we create a state to deal with the cleanup states
    const [cancelled, setCancelled] = useState(false);
    // to use authentication functions

    const auth = getAuth();
    // and we create a function to call whenever we need to do the cleanup

    function checkIfIsCancelled() {
        if (cancelled) return;
    }

    const createUser = async (data) => {
        // cleanup
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                // these parameters are mandatory to get user information
                auth,
                data.email,
                data.password
            );

            // firebase saves user info by updating the existent data. We must send the user and the displayName
            await updateProfile(user, {
                displayName: data.displayName
            });

            // set loading to false after retrieving data
            setLoading(false);

            // Finally we return the user
            return user;
        } catch (error) {
            // if error occurs
            console.error(error.message);
            console.error(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes('Password')) {
                systemErrorMessage = "A senha precisa conter, pelo menos, 6 caracteres.";
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'E-mail já cadastrado';
            } else {
                systemErrorMessage = 'Ocorreu um erro. Por favor, tente mais tarde.';
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    // useEffect to set cancelled as true and avoid memory leak
    useEffect(() => {
        setCancelled(true);
    }, []);

    // return data we need in the future
    return {
        auth,
        createUser,
        error,
        loading
    };
};