import { useReducer, useState } from "react";

export const HookUseReducer = () => {
    // 1 - começando com useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    // 2 - avançando com useReducer
    const initialTasks = [
        { id: 1, text: 'Fazer alguma coisa' },
        { id: 2, text: 'Fazer outra coisa' },
    ];

    // Função do reducer
    const taskReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };
                setTaskText('');
                return [...state, newTask];
            case 'DELETE':
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState('');
    // Declaração do reducer
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = e => {
        e.preventDefault();

        dispatchTasks({ type: 'ADD' });
    };

    const removeTask = id => {
        dispatchTasks({ type: 'DELETE', id: id });
    };

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Gerar número aleatório</button>
            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setTaskText(e.target.value)} value={taskText} />
                <input type="submit" value="Enviar" />
            </form>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
            <hr />
        </div>
    );
};

/*

O useReducer tem função semelhante ao useState, ele também gerencia valores. Porém, temos a possibilidade de executar uma função na hora da alteração do valor.

Dessa forma, entendemos que o useReducer recebe um VALOR para gerenciar e uma FUNÇÃO para alterar esse valor.= (diferente do useState que a função fica por nossa conta, externamente à funcionalidade do hook).

A sintaxe do método é semelhante ao do useState, porém, em vez de passarmos o state e o setState dentro dos colchetes, nós passamos um estado e uma função, geralmente denominada de dispatch, que será detalhada como argumento do useReducer. Essa função recebe como parâmetro um state e uma action.

No nosso exemplo 1, mais simples, fizemos um reducer que tem um estado number (que será o state), mas não usaremos a action da função dispatch. Nossa função vai simplesmente atribuir ao state number um valor aleatório com Math.random(). Esse exemplo mostra como o useReducer pode ser muito semelhante ao useState. Porém, o useReducer tende a ser utilizado para operações mais complexas, utilizando a estrutura SWITCH com ACTIONS.

Em um exemplo mais complexo (exemplo 2), nós simulamos uma lista de tarefas em um objeto JS. Normalmente, nós criamos a função dispatchTasks (que ativa a action do reducer, nesse caso, a taskReducer) fora da declaração do useReducer, diferente do que fizemos no exemplo 1. Sendo assim, ao declararmos o useReducer, usamos como parâmetros a função taskReducer e o estado initialTasks.

A nossa função taskReducer vai ter N casos de manipulação dos dados da lista de tarefas, como adicionar uma tarefa ou deletar uma tarefa. Por padrão, o switch do JS também exige uma ação default, que não usaremos aqui, então damos um return state nesse caso pois não queremos executar nada. No formulário de manipulação da lista de tarefas, teremos um input que adicionará tarefas novas (case ADD do switch) e no clique duplo das tarefas, teremos a exclusão da mesma (case DELETE do switch). O switch sempre recebe um tipo de ação (ou action.type).

No submit do formulário, passamos a função dispatchTasks colocando o tipo da ação como parâmetro (nesse caso {type: 'ADD'}). O case 'ADD' no switch gera uma nova tarefa com id aleatório e o texto da tarefa controlado por um useState. Limpamos o formulário com o setState e retornamos a array existente de tarefas com o spread operator somado à nova tarefa (return [...state, newTask])

Já na exclusão da tarefa, precisamos passar o tipo da ação ({type: 'DELETE'}) e também o id da tarefa, para que ela seja devidamente identificada e excluída. O case 'DELETE' vai retornar uma nova array de objetos criada através do filter, onde trazemos apenas as tarefas cujo id seja diferente daquela que clicamos.

*/