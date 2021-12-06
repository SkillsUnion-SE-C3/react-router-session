import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">HOME</Link>
      <Link to="products">PRODUCTS</Link>
      <Link to="basket">BASKET</Link>
    </nav>
  )
}

export default Nav