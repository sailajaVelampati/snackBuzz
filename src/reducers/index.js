import { combineReducers } from "redux";
import { getProducuts, getCart } from "./home";
export default combineReducers({ products: getProducuts, cart: getCart });
