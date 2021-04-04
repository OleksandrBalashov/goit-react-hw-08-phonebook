import React from 'react';
import ContactFilter from '../FilterContacts';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const onDelete = e => onDeleteContact(e.target.dataset.id);

  return (
    <>
      <ContactFilter />
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.item}>
            <p className={styles.text}>
              {name}: {number}
            </p>
            <button
              data-id={id}
              type="button"
              className={styles.button}
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
