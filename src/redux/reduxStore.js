import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: messagesReducer,
}); // as _state.js

const store = createStore(reducers);

export default store;
