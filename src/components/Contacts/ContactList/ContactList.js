import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.css";
import slideTransition from "../transitions/slide.module.css";
import {
  getContactsItems,
  getContactsFilter,
} from "../../../redux/contacts/contactsSelectors";
import { removeItem } from "../../../redux/contacts/contactsOperations";
import { connect } from "react-redux";

function filteredContact(items, filter) {
  if (filter.length !== 0) {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return items;
  }
}

const ContactList = ({ items, filter = "", removeItem }) => {
  const contacts = filteredContact(items, filter);
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map((contact) => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={slideTransition}
        >
          <ContactListItem
            removeItem={removeItem}
            contact={contact}
            key={items.id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => {
  return {
    items: getContactsItems(state),
    filter: getContactsFilter(state),
  };
};

const mapDispatchToProps = {
  removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
