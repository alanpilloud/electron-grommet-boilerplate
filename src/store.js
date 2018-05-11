import { createStore, combineReducers } from "redux";
import configuration from "./reducers/configuration";
import { devToolsEnhancer } from "redux-devtools-extension";

const reducers = combineReducers({
  configuration
});

const store = createStore(reducers, devToolsEnhancer());
export default store;
