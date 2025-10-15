// src/pages/CartPage.tsx
import { useCart } from "../hooks/useCart";


const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0)

  return (
    <div>
      <h2 className= "text-transparent bg-clip-text bg-linear-to-t from-sky-500 to-indigo-500">Your Cart</h2>
      <br />
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="art-cart">
          {cart.map((item, index) => (
            <div className='flex flex-col content-center object-center ' key={index}>
              <img className='m-auto' src={item.image} alt={item.title} width="10%" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.medium}</p>
                <p>${item.price}</p>
                <button title='remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button title='clear-btn' onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  )
}

export default CartPage
