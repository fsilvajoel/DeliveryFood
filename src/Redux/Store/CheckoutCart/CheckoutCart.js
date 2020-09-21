const SET_SHOPPING_CART = 'SET_SHOPPING_CART'

const initialState = {
  shoppingCart: [],
}

export default function checkoutCart(state = initialState, action) {
  switch (action.type) {
    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      }
    default:
      return state
  }
}
// actions
export const setNewProduct = (product) => ({
  type: SET_SHOPPING_CART,
  payload: product,
})
