import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Redux/Reducers/index";
const middleware = [thunk];
const inintialState = {};
const store = createStore(
  rootReducer,
  inintialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;