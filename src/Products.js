function Products(props) {

  const renderProducts = () => {
    return props.products.map((product) => {
      return <p key={product.name}>{product.name}</p>
    })
  }

  return (
    <div>
      <h3>Products</h3>
      {renderProducts()}
    </div>
  );
}

export default Products