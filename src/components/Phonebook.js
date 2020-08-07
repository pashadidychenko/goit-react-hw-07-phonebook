import React from "react";
import MainTitle from "./Title/MainTitle/MainTitle";
import ContactList from "./Contacts/ContactList/ContactList";
import { AddContact } from "./Contacts/AddContact/AddContact";
import FindContact from "./Contacts/FindContact/FindContact";
// import { sendStoregData, getStoregData } from "./Services/LocalStoreg";
import { CSSTransition } from "react-transition-group";
import popTransition from "./Contacts/transitions/pop.module.css";
import slideTitleTransition from "./Contacts/transitions/slideTitle.module.css";
import styles from "./Phonebook.module.css";
import { connect } from "react-redux";
import {
  addNewItem,
  deleteItem,
  getFilterValue,
} from "../redux/contacts/contactsActions";
import { statusInOn, statusExist } from "../redux/status/statusActions";

const Phonebook = (props) => {
  props.statusInOn(true);
  const { items, inOn } = props;
  return (
    <div className={styles.maineContainer}>
      <div className={styles.subContainer}>
        <CSSTransition
          in={inOn}
          timeout={500}
          classNames={slideTitleTransition}
          unmountOnExit
        >
          <MainTitle />
        </CSSTransition>
        <AddContact props={props} />
        <CSSTransition
          in={items.length > 1}
          timeout={250}
          classNames={popTransition}
          unmountOnExit
        >
          <FindContact props={props} />
        </CSSTransition>
        <ContactList props={props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
    inOn: state.status.inOn,
    exist: state.status.exist,
  };
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//     filter: state.filter,
//   };
// };

const mapDispatchToProps = {
  addNewItem,
  deleteItem,
  getFilterValue,
  statusInOn,
  statusExist,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
