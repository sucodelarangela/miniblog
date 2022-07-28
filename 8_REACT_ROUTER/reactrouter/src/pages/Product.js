// dependencies and hooks
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams(); // useParams gets the dynamic value from the route/url

    // loading individual data for the products
    const url = `http://localhost:8000/products/${id}`;
    const { data: product, loading, error } = useFetch(url);

    console.log(product);

    return (
        <>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/* Nested routes */}
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    );
};

export default Product;