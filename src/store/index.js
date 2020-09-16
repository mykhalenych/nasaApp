import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { nasaReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  nasa: nasaReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
