import React, { useState } from "react";
import Product from "./components/Products/Product";
import data from "./data/data";

function App() {
  const [cart, setCart] = useState([]); // estado para almacenar los productos agregados al carrito

  const handleAddToCart = (product) => {
    setCart([...cart, product]); // añade el producto al carrito
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      {data.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
          onAddToCart={() => handleAddToCart(product)} // callback que se ejecuta cuando se agrega el producto al carrito
        />
      ))}
      <p>Productos en el carrito: {cart.length}</p>
    </div>
  );
}

export default App;
