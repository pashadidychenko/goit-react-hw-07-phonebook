import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";
import statusReducer from "./status/statusReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    status: statusReducer,
  },
});

// const store = createStore(contactsReducer, composeWithDevTools());

export default store;
