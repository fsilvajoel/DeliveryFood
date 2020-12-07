const SET_PRODUCT = 'SET_PRODUCT';
const SET_PAYMENT = 'SET_PAYMENT';
const SET_DELIVERY = 'SET_DELIVERY';
const DELETE_SHOPPING_CART = 'DELETE_SHOPPING_CART';
const initialState = {
  shoppingCart: [],
  paymentMethod: [],
  deliveryMethod: [],
  countOfProducts: 0,
};

const dropProduct = (list, position) => {
  list.splice(position, 1);
  return list;
};

export default function checkoutCart(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
        countOfProducts: state.shoppingCart.length,
      };
    case SET_PAYMENT:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case SET_DELIVERY:
      return {
        ...state,
        deliveryMethod: action.payload,
      };
    case DELETE_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: [dropProduct(state.shoppingCart, action.payload)],
      };
    default:
      return state;
  }
}
// actions
export const setDelivery = (product) => ({
  type: SET_DELIVERY,
  payload: product,
});
export const setPayment = (product) => ({
  type: SET_PAYMENT,
  payload: product,
});
export const setNewProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product,
});

export const DeleteProduct = (position) => ({
  type: DELETE_SHOPPING_CART,
  payload: position,
});
