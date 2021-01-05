import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/ProductReducer";
const rootreducer = combineReducers({
  productList: productReducer
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
