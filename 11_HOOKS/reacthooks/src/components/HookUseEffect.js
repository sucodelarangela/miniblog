import { useState, useEffect } from "react";

export const HookUseEffect = () => {
    // 1 - useEffect sem dependência é executado sempre que o componente for re-renderizado
    useEffect(() => {
        console.log('Estou sendo executado');
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - useEffect com array de dependência vazio é executado apenas uma vez. Ex de uso: fetch de dados de DB
    useEffect(() => {
        console.log('Sou executado apenas uma vez');
    }, []);

    // 3 - useEffect com item no array de dependência para controlar QUANDO queremos que a função execute

    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        // if para prevenir a execução no primeiro loading
        if (anotherNumber > 0) {
            console.log('Sou executado apenas quando o anotherNumber muda');
        }
    }, [anotherNumber]);

    // 4 - cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log('Hello World');
        //     // setAnotherNumber(anotherNumber + 1);
        // }, 2000);

        // // sem esse return, o setTimeout executaria mesmo mudando de página e teríamos um erro porque o anotherNumber não existe na outra página. Com o clearTimeout, ao mudar de página, o React entende que nós não queremos mais que o timeout continue:
        // return () => clearTimeout(timer);
    }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar!</button>
            <p>Another number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
            <hr />
        </div>
    );
};
