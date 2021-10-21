import { call, all, put, apply, takeLatest } from "redux-saga/effects";
import {
  REQUEST_PRODUCTS,
  receiveProducts,
  UPDATE_CART,
  GET_CART,
  requestCart,
  receiveCart,
} from "../actions";
const BASE_URL = "http://localhost:3000/";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getProducts() {
  // To get all the products
  const response = yield call(fetch, `${BASE_URL}products`);
  const data = yield apply(response, response.json);
  yield put(receiveProducts(data));
}
function* getCart() {
  //To get the cart products
  const response = yield call(fetch, `${BASE_URL}cart`);
  const data = yield apply(response, response.json);
  yield put(receiveCart(data));
}
export function* updateCart({ payload }) {
  // To Updated the cart -
  // Please be noted there is no validation added please select the uniques product to execute without error
  const response = yield call(fetch, `${BASE_URL}cart`, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(payload),
  });
  const data = yield apply(response, response.json);
  yield put(requestCart(data));
}

function* actionWatcherUpdateCart() {
  yield takeLatest(UPDATE_CART, updateCart);
}
function* actionWatcherGetCart() {
  yield takeLatest(GET_CART, getCart);
}
function* actionWatcherGetProducts() {
  yield takeLatest(REQUEST_PRODUCTS, getProducts);
}

export default function* allSaga() {
  yield all([
    actionWatcherGetProducts(),
    actionWatcherUpdateCart(),
    actionWatcherGetCart(),
  ]);
}
