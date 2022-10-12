import { useState } from "react";

export const HookUseState = () => {
    // 1 - useState
    let userName = 'João';

    // [getter, setter]
    const [name, setName] = useState('Matheus');

    const changeNames = () => {
        userName = 'João Sousa';
        setName('Matheus Battisti');
    };

    // 2 - useState e inputs
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        // aqui viria um envio a uma api, por exemplo
        console.log(age);
    };

    return (
        <div>
            {/* 1 */}
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>Estado: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            {/* 2 */}
            <form onSubmit={handleSubmit}>
                <p>Digite a sua idade:</p>
                <input type="text" value={age} onChange={e => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos!</p>
            <hr />
        </div>
    );
};

/*

Usamos o useState para gerenciar valores, re-renderizando o componente semore que o valor for alterado.

O state altera o componente, mas a variável não tem esse efeito em tela, ao renderizar. Mas se dermos um console.log() podemos verificar que o valor da variável é alterado na ação, mas não gera uma nova renderização.

De forma geral, se temos alteração de valores em tela, usamos estados. Se não, podemos usar variáveis.

useState é especialmente útil com inputs, atrelando um estado ao input e alterando-o através do onChange, que monitora todas as alterações do campo do input. Também é usado para atribuição de value a um input e limpeza desse value (controlled inputs).

*/