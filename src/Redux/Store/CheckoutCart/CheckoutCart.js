// types

// SHOPPING_CART
// export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SET_SHOPPING_CART = 'SET_SHOPPING_CART';
// export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

const initialState = {
  shoppingCart: []
  // drink: {},
  // current_category: {}
};
// reducer
export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        food: action.payload.Comida,
        drink: action.payload.Bebida
      };
    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: action.payload
      };
    default:
      return state;
  }
}
// actions
export const getAllProducts = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products
});
export const setNewProduct = (product) => ({
  type: SET_SHOPPING_CART,
  payload: product
});
