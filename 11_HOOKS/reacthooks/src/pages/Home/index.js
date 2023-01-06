import { HookUseEffect } from "components/HookUseEffect";
import { HookUseReducer } from "components/HookUseReducer";
import { HookUseState } from "components/HookUseState";

// useContext
import { useContext } from "react";
import { SomeContext } from "components/HookUseContext"; // contexto

const Home = () => {
    // extraímos o valor do contexto com useContext, passando como parâmetro o context que foi criado
    const { contextValue } = useContext(SomeContext);

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr />
        </div>
    );
};

export default Home;