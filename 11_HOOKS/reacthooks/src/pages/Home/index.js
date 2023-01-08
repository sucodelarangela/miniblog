import { HookUseEffect } from "components/HookUseEffect";
import { HookUseReducer } from "components/HookUseReducer";
import { HookUseState } from "components/HookUseState";

// useContext
import { useContext } from "react";
import { SomeContext } from "components/HookUseContext"; // contexto
import { HookUseRef } from "components/HookUseRef";
import { HookUseCallback } from "components/HookUseCallback";
import { HookUseMemo } from "components/HookUseMemo";
import { HookUseLayoutEffect } from "components/HookUseLayoutEffect";

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
            <HookUseRef />
            <HookUseCallback />
            <HookUseMemo />
            <HookUseLayoutEffect />
        </div>
    );
};

export default Home;