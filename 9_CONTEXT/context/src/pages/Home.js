import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const Home = () => {
    // destructuring and using CounterContext. counter value is provider by CounterContextProvider (duh)
    const { counter } = useContext(CounterContext);

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    );
};

export default Home;

// necessary to import useContext to use contexts (duh)