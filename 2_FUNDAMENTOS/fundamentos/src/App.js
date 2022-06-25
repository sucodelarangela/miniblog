// components
import FirstComponent from './Components/FirstComponent';
import TemplateExpressions from './Components/TemplateExpressions';
import MyComponent from './Components/MyComponent';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      {/* First component loaded into App.js */}
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
    </div>
  );
};

export default App;
