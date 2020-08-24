import { combineReducers } from 'redux';
import products from './Store/ProductsDucks';

export default combineReducers({
  productsStore: products
});
