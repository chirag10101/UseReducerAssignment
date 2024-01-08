import React from 'react'
import {CartContext} from './CartProvider'
import { useContext } from 'react'

export default function ProductList() {
    const {addItem}  = useContext(CartContext);
    const products = [
        { id: 1, name: 'Mobile', price: 10000, quantity:1},
        { id: 2, name: 'Laptop', price: 20000, quantity:1},
        { id: 3, name: 'Headphone', price: 730, quantity:1 },
        { id: 4, name: 'Charger', price: 530,quantity:1 },
        { id: 5, name: 'Mouse', price: 330,quantity:1 },
      ]
      
      return (
        <div>
          <h2>Products</h2>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => addItem(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )
}
