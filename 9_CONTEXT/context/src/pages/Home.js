// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// import new useContext hook - REFACTOR
import { useCounterContext } from "../hooks/useCounterContext";

import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
    // destructuring and using CounterContext. counter value is provided by CounterContextProvider (duh)
    // const { counter } = useContext(CounterContext);

    // using useCounterContext hook
    const { counter } = useCounterContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/* changing context value */}
            <ChangeCounter />
        </div>
    );
};

export default Home;

// necessary to import useContext to use contexts (duh)