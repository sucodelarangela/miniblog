const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
    </div>
  );
};

export default CarDetails;

/* Destructuring props allow us to keep a cleaner and more semantic code, making it easier to maintain */