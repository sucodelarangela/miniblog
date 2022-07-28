// dependencies
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    // extracting search params from the search url and saving in a variable
    const [searchParams] = useSearchParams();
    // the json-server is already configure to get any results with this params
    const url = `http://localhost:8000/products?${searchParams}`;
    // then we use this new url to fetch the data
    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Resultados disponíveis:</h1>
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
        </div>
    );
};

export default Search;