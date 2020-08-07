import { createReducer } from "@reduxjs/toolkit";
import { statusInOn, statusExist } from "../status/statusActions";

const statusReducer = createReducer(
  { inOn: false, exist: false },
  {
    [statusInOn]: (state, action) => ({
      ...state,
      inOn: action.payload,
    }),
    [statusExist]: (state, action) => ({
      ...state,
      exist: action.payload,
    }),
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

export default statusReducer;
