// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando Props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

function App() {
  // 1 - variaveis
  const name: string = "Angela";
  const age: number = 37;
  const isWorking: boolean = true;

  // Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  return (
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
      />
      <Destructuring
        title='Segundo post'
        content="Mais outro conteúdo"
        commentsQty={5}
        tags={['python']}
      />
    </div>
  );
}

export default App;
