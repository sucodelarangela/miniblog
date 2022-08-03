import { useContext } from "react";

import ChangeCounter from "../components/ChangeCounter";

import { CounterContext } from "../context/CounterContext";

const About = () => {
    // destructuring and using CounterContext. counter value is provided by CounterContextProvider (duh)
    const { counter } = useContext(CounterContext);

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