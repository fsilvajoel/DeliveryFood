// types

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SET_FOOD = 'SET_FOOD';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

const initialState = {
  food: {},
  drink: {},
  current_category: {}
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
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        current_category: action.payload
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
export const setCurrentCategory = (category) => ({
  type: SET_CURRENT_CATEGORY,
  payload: category
});
