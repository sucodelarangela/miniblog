import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    // if there is no context (error on context code, bug on creating context, etc)
    if (!context) {
        console.log('Contexto não encontrado');
    }

    return context;
};

// Refactoring the useContext as a hook
// This way it's not necessary to import useContext on every file in which we'll use the context, only the hook
// We can also validate the context to treat errors