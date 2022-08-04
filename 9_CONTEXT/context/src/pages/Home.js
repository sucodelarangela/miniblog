// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// import new useContext hook - REFACTOR
import { useCounterContext } from "../hooks/useCounterContext";
// importing a more complex context
import { useTitleColorContext } from "../hooks/useTitleColorContext";

import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
    // destructuring and using CounterContext. counter value is provided by CounterContextProvider (duh)
    // const { counter } = useContext(CounterContext);
    // using useCounterContext hook instead of code above
    const { counter } = useCounterContext();
    // using a more complex context
    const { color, dispatch } = useTitleColorContext();

    // changing complex contexts
    const setTitleColor = color => {
        dispatch({ type: color });
    };

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/* changing context value */}
            <ChangeCounter />
            {/* changing complex contexts */}
            <div>
                <button onClick={() => setTitleColor('RED')}>Vermelho</button>
                <button onClick={() => setTitleColor('BLUE')}>Azul</button>
            </div>
        </div>
    );
};

export default Home;

// necessary to import useContext to use contexts (duh)