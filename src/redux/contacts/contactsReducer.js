import { createReducer } from "@reduxjs/toolkit";
import {
  addNewItem,
  deleteItem,
  getFilterValue,
} from "../contacts/contactsActions";

const contactsReducer = createReducer(
  { items: [], filter: "" },
  {
    [addNewItem]: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),
    [deleteItem]: (state, action) => ({
      ...state,
      items: [...state.items.filter((item) => item.id !== action.payload)],
    }),
    [getFilterValue]: (state, action) => ({ ...state, filter: action.payload }),
  }
);

// const contactsReducer = (state = { items: [], filter: "" }, action) => {
//   switch (action.type) {
//     case "ADD_NEW_ITEM":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };

//     case "DELETE_ITEM":
//       return {
//         ...state,
//         items: [...state.items.filter((item) => item.id !== action.payload)],
//       };
//     case "FILTER_ITEM":
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default contactsReducer;
