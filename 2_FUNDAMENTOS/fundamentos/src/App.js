// components
import FirstComponent from './Components/FirstComponent';
import TemplateExpressions from './Components/TemplateExpressions';
import MyComponent from './Components/MyComponent';
import Events from './Components/Events';
import Challenge from './Components/Challenge';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <h3>Somente o componente Challenge está sendo renderizado para a tarefa.</h3>
      {/* <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events /> */}
      <Challenge />
    </div>
  );
};

export default App;
