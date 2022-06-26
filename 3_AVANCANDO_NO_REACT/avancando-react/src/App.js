// components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';

// styles
import './App.css';

// images
import City from './assets/city.jpg';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Image in /public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Image in src */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;

/*

The src in img tag is directly linked to /public, so it's not necessary to use "/public" on the src file path. Useful for static images.
When images are inside /src or in a child folder, we can use import instead of the img tag. In this case, we'll have a dynamic src and these imports may be used as variables.

*/