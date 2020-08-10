import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./contactsActions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000";

const addNewItem = (contact) => (dispatch) => {
  dispatch(addContactsRequest());
  axios
    .post("/contacts", { ...contact })
    .then(({ data }) => {
      dispatch(addContactsSuccess({ ...data }));
    })
    .catch((error) => dispatch(addContactsError(error)));
};

const getItem = () => (dispatch) => {
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch(getContactsSuccess([...data]));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

const removeItem = (id) => (dispatch) => {
  dispatch(removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactsSuccess(id));
    })
    .catch((error) => dispatch(removeContactsError(error)));
};

export { addNewItem, getItem, removeItem };
