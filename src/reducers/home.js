import { RECEIVE_PRODUCTS, RECEIVE_CART } from "../actions";
const initialState = {
  products: [],
  cart: [],
};
const getProducuts = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
const getCart = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export { getProducuts, getCart };
