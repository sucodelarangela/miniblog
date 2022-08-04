// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";
// importing a more complex context
import { useTitleColorContext } from "../hooks/useTitleColorContext";

import ChangeCounter from "../components/ChangeCounter";

const About = () => {
    // destructuring and using CounterContext. counter value is provided by CounterContextProvider (duh)
    // const { counter } = useContext(CounterContext);
    // using useCounterContext hook instead of code above
    const { counter } = useCounterContext();
    // using a more complex context
    const { color } = useTitleColorContext();

    // we're not using dispatch because we're only gathering the value and using here. The action to change the color exists only on Home page

    return (
        <div>
            <h1 style={{ color: color }}>Sobre</h1>
            <p>Valor do contador: {counter}</p>
            {/* changing context value */}
            <ChangeCounter />
        </div>
    );
};

export default About;