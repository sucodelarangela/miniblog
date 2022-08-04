// This is a more complex hook, so we'll use a reducer to make it simpler
import { createContext, useReducer } from 'react';

// Exporting the contex
export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    // every reducer has an action
    switch (action.type) {
        case "RED":
            // returns all data in state and change what we need
            return { ...state, color: 'red' };
        case "BLUE":
            return { ...state, color: 'blue' };
        default:
            return state;
    }
};

// exporting the Provider
export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' });

    console.log('Title Color Context:', state);

    return (
        // spread operator to send all properties inside DISPATCH in case we have more than one
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
};

// Reducer is like useState but it controls more things
// When working on hooks, we have the STATE of the current hook (it may be an object, in this case titleColorReducer) and we also have the DISPATCH which is the function that changes the context afterwards (in our case, we're setting a css property as an object), so the STATE titleColorReducer starts with the color Purple