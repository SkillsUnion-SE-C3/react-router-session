import './App.css';
import Products from './Products'
import Basket from './Basket'
import { useState } from 'react'
import Nav from './Nav'
import initialProducts from './initialProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Product'

function App() {
  const [products] = useState(initialProducts)
  const [shoppingBasket, setShoppingBasket] = useState([])

  const addToBasket = (product) => {
    setShoppingBasket([...shoppingBasket, product])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Welcome to our store</h1>} />
          <Route path="/products" element={<Products products={products} />}>
            <Route path=":name" element={<Product addToBasket={addToBasket} />} />
          </Route>
          <Route path="/basket" element={<Basket shoppingBasket={shoppingBasket} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
