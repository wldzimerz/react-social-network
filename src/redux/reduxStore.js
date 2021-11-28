import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import communityReducer from "./communityReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: messagesReducer,
  communityPage: communityReducer,
  auth: authReducer,
}); // as _state.js

const store = createStore(reducers);

export default store;
