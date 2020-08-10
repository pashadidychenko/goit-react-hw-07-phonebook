import React from "react";
import MainTitle from "./Title/MainTitle/MainTitle";
import ContactList from "./Contacts/ContactList/ContactList";
import AddContact from "./Contacts/AddContact/AddContact";
import FindContact from "./Contacts/FindContact/FindContact";
import { CSSTransition } from "react-transition-group";
import popTransition from "./Contacts/transitions/pop.module.css";
import slideTitleTransition from "./Contacts/transitions/slideTitle.module.css";
import styles from "./Phonebook.module.css";
import { connect } from "react-redux";
import { getItem } from "../redux/contacts/contactsOperations";
import { statusInOn } from "../redux/status/statusActions";
import { getContactsItems } from "../redux/contacts/contactsSelectors";
import { getStatusIson } from "../redux/status/statusSelectors";

class Phonebook extends React.Component {
  componentDidMount() {
    this.props.getItem();
  }
  render() {
    this.props.statusInOn(true);
    const { items, inOn } = this.props;
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
          <AddContact />
          <CSSTransition
            in={items.length > 1}
            timeout={250}
            classNames={popTransition}
            unmountOnExit
          >
            <FindContact />
          </CSSTransition>
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: getContactsItems(state),
    inOn: getStatusIson(state),
  };
};

const mapDispatchToProps = {
  getItem,
  statusInOn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
