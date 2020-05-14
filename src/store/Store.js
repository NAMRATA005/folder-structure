import { createStore, compose, applyMiddleware } from "redux";
import { AllReducers } from "../Reducer/CombineReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware());
const store = createStore(AllReducers, enhancer);
export default store;
