// components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';
import Fragment from './Components/Fragment';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';

// styles
import './App.css';

// images
import City from './assets/city.jpg';

// hooks
import { useState } from 'react';
import Message from './Components/Message';
import ChangeMsgState from './Components/ChangeMsgState';

function App() {
  // const name = 'Tereza';
  const [userName] = useState('Maria');

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul ", newCar: false, km: 234 }
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  // State and function to deal with state lift
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
      <ShowUserName name={userName} />

      <CarDetails brand="Volkswagen" km={100000} color="Azul" newCar={false} />
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* Looping an array of objects */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      <Fragment propFragment="teste" />

      <Container myValue="aleatório">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="indefinido">
        <h5>Testando o container</h5>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message msg={message} />
      <ChangeMsgState handleMessage={handleMessage} />
    </div>
  );
}

export default App;

/*

The src in img tag is directly linked to /public, so it's not necessary to use "/public" on the src file path. Useful for static images.
When images are inside /src or in a child folder, we can use import instead of the img tag. In this case, we'll have a dynamic src and these imports may be used as variables.

*/