import { ActionTypes } from '../contants/action-types';

export const setProducts = products => {
  // actions returns and object with type and payload = product
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
}; // product is the data of array of objects of items which is called from api.
export const selectedProduct = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
}; // selected product action returns object wuth type selected product and payload=product  which here is the data  of the selected product from api call

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
