import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import communityReducer from "./communityReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: messagesReducer,
  communityPage: communityReducer,
}); // as _state.js

const store = createStore(reducers);

export default store;
