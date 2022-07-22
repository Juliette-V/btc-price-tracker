import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { btcReducer } from "./reducers";

const rootReducer = combineReducers({
  BTC: btcReducer,
});
export const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  store.getState();
});
