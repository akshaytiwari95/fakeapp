import { combineReducers } from 'redux';
import { productsReducer } from './productReducer';
import { selectedProductsReducer } from './productReducer';
const reducers = combineReducers({
  allProducts: productsReducer, //will return the data from productReducer reducer.{ products:[{..},{..}]}
  product: selectedProductsReducer, // will return the data from productReducer reducer.
});
export default reducers;
