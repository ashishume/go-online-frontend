import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

//REDUCERS
import authReducer from "./reducers/auth";
import meetingsReducer from "./reducers/meeting";
import loaderReducer from "./reducers/loader";
import adminReducer from "./reducers/admin";
import sessionReducer from "./reducers/session";

const rootReducer = combineReducers({
  auth: authReducer,
  sessions: sessionReducer,
  meetings: meetingsReducer,
  loader: loaderReducer,
  admin: adminReducer,
  form: formReducer,
});



const middleWares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

const configureStore = () => {
  return store;
};

export default configureStore;
