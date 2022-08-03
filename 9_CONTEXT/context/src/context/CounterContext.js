// 1 - import createContext
import { createContext, useState } from 'react';

// 1 - exporting the context
export const CounterContext = createContext();

// 2 - creating the provider. Syntax similar to a component
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    return (
        // returns the values which will be sent. Values to be consumed (counter) and values to trigger changes (setCounter)
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};


// It's a convention to use 'context' on the file name.
// Contexts are used when we need to share values and variables in a global scope for the application
// 1 - import 'createContext' from 'react' and export default the context
// 2 - create the Provider.
// The Provider delimits where the context is used (where the values from the context will be shared = provided) and must embrace the components where it will be used (normally on App.js or index.js).
// We use children to uplift props
// In the provider, the values may be the ones that will be consumed, but also methods to update or change those values. That is, we can manage all the data in the context through the provider.