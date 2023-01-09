import { createContext } from "react";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando Props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - utilizando Context
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null;
type fixed = 'Isso' | 'Ou' | 'Aquilo';

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Angela";
  const age: number = 37;
  const isWorking: boolean = true;

  // Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 8 - type
  const myText: textOrNull = 'Tem algum texto aqui';
  let mySecondText: textOrNull = null;
  mySecondText = 'Opa';
  const testandoFixed: fixed = 'Isso';

  // 9 - context
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TypeScript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Está trabalhando.</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='Segundo' />
        <Destructuring
          title='Primeiro post'
          content="Algum conteúdo"
          commentsQty={10}
          tags={['tsx', 'jsx']}
          category={Category.TS}
        />
        <Destructuring
          title='Segundo post'
          content="Mais outro conteúdo"
          commentsQty={5}
          tags={['python']}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável e ele é "{myText}"</p>}
        {mySecondText ? <p>Tem texto na variável e ele é "{mySecondText}"</p> : <p>A variável é nula.</p>}
        {testandoFixed}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
