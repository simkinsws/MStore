import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog(props: Props) {
    return (
        <>
        <ul>
        {props.products.map((prod) => (
        <li key={prod.id}>{prod.name} - {prod.price} - {prod.brand}</li>
        ))}
        </ul>
        <button onClick={props.addProduct}>Add Product</button>
        </>
    )
}