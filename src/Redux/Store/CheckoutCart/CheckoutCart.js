const SET_SHOPPING_CART = 'SET_SHOPPING_CART';

const initialState = {
  shoppingCart: []
};

function addProductInCart(product) {
  initialState.shoppingCart.push(product);
  return initialState;
}

export default function checkoutCart(state = initialState, action) {
  switch (action.type) {
    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: addProductInCart(action.payload)
      };
    default:
      return state;
  }
}
// actions
export const setNewProduct = (product) => ({
  type: SET_SHOPPING_CART,
  payload: product
});
