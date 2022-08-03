// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

import ChangeCounter from "../components/ChangeCounter";

const About = () => {
    // destructuring and using CounterContext. counter value is provided by CounterContextProvider (duh)
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    return (
        <div>
            <h1>Sobre</h1>
            <p>Valor do contador: {counter}</p>
            {/* changing context value */}
            <ChangeCounter />
        </div>
    );
};

export default About;