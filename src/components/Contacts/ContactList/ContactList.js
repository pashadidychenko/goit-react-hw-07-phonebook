import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.css";
import slideTransition from "../transitions/slide.module.css";

function filteredContact(items, filter) {
  if (filter.length !== 0) {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return items;
  }
}

const ContactList = ({ props }) => {
  const { items = [], filter = "", deleteItem } = props;
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
            deleteItem={deleteItem}
            contact={contact}
            key={contact.id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
