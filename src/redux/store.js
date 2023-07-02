import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productDetailsReducer, productsReducer } from "./reducers/productReducers";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
});
const middlewares = [thunk, logger];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });

export default store;

// Development URL
// export const server='http://localhost:4000/api/v1'

//Production URL
export const server='https://quickbuy-rpbz.onrender.com'