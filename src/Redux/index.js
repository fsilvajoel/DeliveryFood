import checkoutCart from './Store/CheckoutCart/CheckoutCart.js';
import { combineReducers } from 'redux';
import products from './Store/ProductsDucks';

export default combineReducers({
  productsStore: products,
  checkoutCartStore: checkoutCart
});
