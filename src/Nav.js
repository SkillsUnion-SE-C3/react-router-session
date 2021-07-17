import './Nav.css'

function Nav(props) {
    return (
      <nav className="Nav">
        <p onClick={() => props.setPage('products')}>PRODUCTS</p>
        <p onClick={() => props.setPage('basket')}>BASKET</p>
      </nav>
    )
  }
  
export default Nav