import { createAction } from "@reduxjs/toolkit";

const addNewItem = createAction("ADD_NEW_ITEM");
const deleteItem = createAction("DELETE_ITEM", function prepare(e) {
  const id = e.target.id;
  return {
    payload: id,
  };
});
const getFilterValue = createAction("FILTER_ITEM", function prepare(e) {
  const string = e.target.value;
  return {
    payload: string,
  };
});

// const addNewItem = (item) => {
//   return {
//     type: "ADD_NEW_ITEM",
//     payload: item,
//   };
// };

// const deleteItem = (e) => {
//   const id = e.target.id;
//   return {
//     type: "DELETE_ITEM",
//     payload: id,
//   };
// };

// const getFilterValue = (e) => {
//   const string = e.target.value;
//   return {
//     type: "FILTER_ITEM",
//     payload: string,
//   };
// };

export { addNewItem, deleteItem, getFilterValue };
