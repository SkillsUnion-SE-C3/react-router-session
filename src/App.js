import './App.css';
import Products from './Products'
import Basket from './Basket'
import {useState} from 'react'
import Nav from './Nav'
import initialProducts from './initialProducts';

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [shoppingBasket, setShoppingBasket] = useState([])
  const [currentPage, setCurrentPage] = useState('products')

  const setPage = (page) => {   
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Nav setPage={setPage}/> 
      {currentPage === 'products' ? <Products products={products}/> : ""}
      {currentPage === 'basket' ? <Basket shoppingBasket={shoppingBasket}/> : ""}
    </div>
  );
}

export default App;
