import { useState } from 'react';

// styles
import './App.css';

// components
import MyComponent from './Components/MyComponent';
import Title from './Components/Title';

function App() {
  const n = 15;

  const [name] = useState("Matheus");

  const [redTitle] = useState(true);

  return (
    <div className="App">
      <h1>CSS com React</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "4px solid red" }}>Este elemento foi estilizado de forma inline.</p>

      {/* Dynamic inline css */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={name == "Matheus" ? ({ color: "green", backgroundColor: "#000000" }) : null}>CSS dinâmico</h2>
      <h2 style={name != "Matheus" ? ({ color: "green", backgroundColor: "#000000" }) : null}>CSS dinâmico</h2>

      {/* dynamic classes */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      <h2 className={!redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
