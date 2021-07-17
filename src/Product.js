function Product(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <h2>{props.product.price}</h2>
      <button onClick={props.addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product