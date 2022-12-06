import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Product } from '../models/product';


function App() {
  const [products ,setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7266/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])

  function addProduct()
  {
    setProducts([...products]);
  }

  return (
    <div className="App">
      {products.map(prod => (<li key={prod.id}>{prod.name} - {prod.price} - {prod.brand}</li>))}
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
