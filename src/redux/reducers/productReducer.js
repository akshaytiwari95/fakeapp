import { ActionTypes } from '../contants/action-types';

const initialState = {
  products: [],
};
// a reducer takes an initial state as the argument and 2 argument is the  object returned from the action .each action when dispathed is paassed to all th reducers .
export const productsReducer = (state = initialState, { type, payload }) => {
  // destructurig the object passed from action
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }; // an object-{ products:[{..},{..}]}
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT: // reducer for selected product data
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
