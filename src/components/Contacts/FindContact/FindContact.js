import React from "react";
import styles from "./FindContact.module.css";
import { getFilterValue } from "../../../redux/contacts/contactsActions";
import { connect } from "react-redux";

const FindContact = ({ getFilterValue }) => {
  return (
    <div className={styles.findContainet}>
      <label htmlFor="findContact">Введіть ім'я для пошуку</label>
      <input id="findContact" type="text" onChange={getFilterValue} />
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  getFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContact);
