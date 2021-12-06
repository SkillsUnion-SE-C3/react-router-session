import { Link, Outlet } from 'react-router-dom'

function Products(props) {

  const renderProducts = () => {
    return props.products.map((product) => {
      return <Link state={product} key={product.name} to={`/products/${product.name}`}>{product.name}</Link>
    })
  }

  return (
    <div>
      <h3>Products</h3>
      {renderProducts()}
      <Outlet />
    </div>
  );
}

export default Products