import './App.css';
import CarDetails from './Components/CarDetails';

function App() {
  const cars = [
    { id: 1, name: 'HB20', year: 2022, km: 0 },
    { id: 2, name: 'Uno Attractive', year: 2015, km: 47000 },
    { id: 3, name: 'Gol G4', year: 2009, km: 666000 }
  ];
  return (
    <div className="App">
      <h2 className="title">Carros à venda:</h2>
      {cars.map((car) => (
        <CarDetails key={car.id} name={car.name} year={car.year} km={car.km} />
      ))}
    </div>
  );
}

export default App;
