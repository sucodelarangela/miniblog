import { useState } from 'react';

// styles
import './App.css';

// components
import MyComponent from './Components/MyComponent';

function App() {
  const n = 15;

  const [name] = useState("Matheus");

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
    </div>
  );
}

export default App;
