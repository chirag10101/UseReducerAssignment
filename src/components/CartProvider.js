import React from 'react'
import { useReducer } from 'react'
import {Reducer} from './Reducer'

export const CartContext = React.createContext();

const  CartProvider=(props) => {
    const initialState = {
        items: [],
        total: 0,
    }

    const [state, dispatch] = useReducer(Reducer, initialState);
    const addItem = (item) => {
      dispatch({ type: 'ADD_ITEM', payload: item })
    }
    const removeItem = (item) => {
      dispatch({ type: 'REMOVE_ITEM', payload: item })
    }
    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' })
    }
    return (
      <CartContext.Provider value={{ state, addItem, removeItem, clearCart,initialState }}>
        {props.children}
      </CartContext.Provider>
    )
}

export {CartProvider} ;
