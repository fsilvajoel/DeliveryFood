// types

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SET_COMIDA = 'SET_COMIDA';
export const SET_BEBIDA = 'SET_BEBIDA';

const initialState = {
  comida: {},
  bebida: {}
};
// reducer
export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      //jogar para states especificos cada produto
      console.log('REDUCERRR', action);
      return {
        ...state,
        comida: action.payload.Comida,
        bebida: action.payload.Bebida
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
