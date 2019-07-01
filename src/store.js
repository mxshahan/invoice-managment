import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  middlewareEnhancer = applyMiddleware(thunk),
  composedEnhancers = composeEnhancer(middlewareEnhancer)


const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;
