// styles
import './Home.sass';

// dependencies and hooks
import { Link } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

const Home = () => {
    const url = 'http://localhost:8000/products';

    const { data: items, loading, error } = useFetch(url);

    return (
        <section>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        <Link to={`products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;