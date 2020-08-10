import React from "react";
import styles from "./AddContact.module.css";
import Alert from "../../Alet/Alert";
import { CSSTransition } from "react-transition-group";
import alertTransition from "../../Contacts/transitions/alert.module.css";
import { getContactsItems } from "../../../redux/contacts/contactsSelectors";
import { getStatusExist } from "../../../redux/status/statusSelectors";
import { connect } from "react-redux";
import { addNewItem } from "../../../redux/contacts/contactsOperations";
import { statusExist } from "../../../redux/status/statusActions";

class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleInputValue = (el) => {
    const inputValue = el.target.dataset.type;
    this.setState({
      [inputValue]: el.target.value,
    });
  };

  handleSubmit = (el) => {
    const { statusExist, addNewItem } = this.props;
    el.preventDefault();
    const contact = {
      name: this.state.name.replace(/\b\w/g, (l) => l.toUpperCase()),
      number: this.state.number,
    };
    if (
      this.props.items.find(
        (element) => element.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      statusExist(true);
      return setTimeout(() => {
        statusExist(false);
      }, 2000);
    } else {
      addNewItem(contact);
    }
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    const { exist } = this.props;
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label htmlFor="contactName">Ім'я</label>
        <input
          id="contactName"
          type="text"
          data-type="name"
          value={name}
          placeholder="Введіть Ваше Ім'я"
          onChange={this.handleInputValue}
        />
        <br />
        <label htmlFor="contactNumber">Номер</label>
        <input
          id="contactNumber"
          type="text"
          data-type="number"
          value={number}
          placeholder="Введіть Ваш номер"
          onChange={this.handleInputValue}
        />
        <br />
        <button variant="outlined" type="submit">
          Додати контакт
        </button>
        <CSSTransition
          in={exist}
          timeout={250}
          classNames={alertTransition}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: getContactsItems(state),
    exist: getStatusExist(state),
  };
};

const mapDispatchToProps = {
  addNewItem,
  statusExist,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
