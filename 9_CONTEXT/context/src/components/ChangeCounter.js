// changing context
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    // destructuring CounterContext.
    // if we were only consuming data, we didn't need to bring setCounter. As we're changing the context value, we need to bring both
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Incrementar contador</button>
        </div>
    );
};

export default ChangeCounter;

// Good practices dictates we need to create a component to use the context change. This is it. It's not really necessary, we can do this directly on our pages, but we're doing it to follow good practices

// If we click this button on page, it will increment the counter in 1. Even if we change routes/paths, the value will maintain itself, because the context is the same for every component