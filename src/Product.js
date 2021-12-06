import { useLocation } from 'react-router-dom'

function Product(props) {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>{location.state.name}</h1>
      <h2>{location.state.price}</h2>
      <button onClick={() => props.addToBasket(location.state)}>Add to basket</button>
    </div>
  )
}

export default Product