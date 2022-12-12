import { useEffect } from 'react';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';

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
      <Catalog products={products} addProduct={addProduct}></Catalog>
    </div>
  );
}

export default App;
