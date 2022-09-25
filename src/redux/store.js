import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();
// createStore replaced by configureStore
const store = createStore(rootReducer, composeEnhancers);

export default store;