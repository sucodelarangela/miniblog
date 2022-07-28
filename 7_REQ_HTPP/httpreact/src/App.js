import './App.css';

import { useState } from 'react';

// importing custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  // const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const url = 'http://localhost:3000/products';

  // retrieving data with custom hook by destructuring it
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // old way of retrieving data. it happens only once because dependency array is empty
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // adding new products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // old way of dynamic loading items
    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(product)
    // });

    // dynamic loading of items from api
    // prevProducts is the current state of the products api. Then we use an arrow function and we create a new array with spread operator and the new product together
    // const addedProducts = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProducts]);

    httpConfig(product, "POST");

    // reseting the inputs
    setName('');
    setPrice('');
  };

  const handleDelete = async (id) => {
    const productId = `${url}/${id}`;
    httpConfig(productId, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* loading state */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {/* showing products fecthed from api on page */}
          {/* we've changed 'products' by 'items' to map data fetched by useFetch. To avoid errors (items = null), we make a validation with && */}
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$: {product.price} <button onClick={() => handleDelete(product.id)}>Excluir</button></li>
          ))}
        </ul>
      )}
      {/* form to add new products */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
