import checkoutCart from './Store/CheckoutCart/CheckoutCart.js';
import { combineReducers } from 'redux';
import products from './Store/Products/ProductsDucks';
import adress from './Store/Adress/Adress';

export default combineReducers({
  productsStore: products,
  checkoutCartStore: checkoutCart,
  adressStore: adress,
});
