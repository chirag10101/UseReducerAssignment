

export  const Reducer =(state, action)=> {
    const initialState = {
        items: [],
        total: 0,
    }
    switch (action.type) {
        case 'ADD_ITEM':
          if(state.items.find((temp)=> temp.id === action.payload.id)) {
            return {
              ...state,
              items: [...state.items], 
            }
          }else{
            return {
              ...state,
              items: [...state.items, action.payload],
              total: state.total + action.payload.price,
            }
          }
          
        case 'REMOVE_ITEM':
          const updatedItems = state.items.filter(
            (item) => item.id !== action.payload.id
          )
          return {
            ...state,
            items: updatedItems,
            total: state.total - action.payload.price,
          }
        case 'CLEAR_CART':
          return initialState
        default:
          return state
      }
}
