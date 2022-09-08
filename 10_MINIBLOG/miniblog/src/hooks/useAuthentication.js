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
    // and we create a function to call whenever we need to do the cleanup
    function checkIfIsCancelled() {
        if (cancelled) return;
    }

    // to use authentication functions
    const auth = getAuth();
};