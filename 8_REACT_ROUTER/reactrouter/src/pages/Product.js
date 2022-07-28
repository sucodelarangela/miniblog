// dependencies
import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams(); // get the dynamic value from the route/url

    return (
        <>
            <p>ID do produto: {id}</p>
        </>
    );
};

export default Product;