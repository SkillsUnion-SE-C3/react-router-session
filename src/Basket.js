import './Basket.css'

function Basket(props) {
  const renderBasket = () => {
    return props.shoppingBasket.map((item) => <p key={item.name}>{item.name}</p>)
  }

  return (
    <div className="Basket">
      <h3>Basket</h3>
      {props.shoppingBasket.length ? renderBasket() : "Basket is empty"}
    </div>
  )
}

export default Basket