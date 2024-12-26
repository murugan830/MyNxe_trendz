// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListCount = cartList.length
      let total = 0
      cartList.forEach(element => {
        total += element.price * element.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="CartSummaryContainer">
            <h1 className="order-total">
              Order Total: <span className="span-style">Rs.{total}/- </span>
            </h1>
            <p className="items-count">{cartListCount} Items in cart</p>
            <button className="checkout-button" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
