export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const UPDATE_CART = "UPDATE_CART";
export const GET_CART = "GET_CART";
export const RECEIVE_CART = "RECEIVE_CART";

export const requestProducts = () => ({ type: REQUEST_PRODUCTS });
export const requestCart = () => ({ type: GET_CART });
export const receiveCart = (data) => ({ type: RECEIVE_CART, payload: data });
export const receiveProducts = (data) => ({
  type: RECEIVE_PRODUCTS,
  payload: data,
});
export const requestUpdateCart = (data) => ({
  type: UPDATE_CART,
  payload: data,
});
