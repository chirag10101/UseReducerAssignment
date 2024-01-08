import React from 'react'
import {CartContext} from './CartProvider'
import { useContext } from 'react'


export default function Cart() {
    const { state, removeItem, clearCart } = useContext(CartContext);
    return (
      <div>
        <h2>Cart</h2>
        {state.items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItem(item)}>Remove</button>
          </div>
        ))}
        <p>Total: {state.total}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    )
}
