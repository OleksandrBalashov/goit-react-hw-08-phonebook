import React from 'react';
import ContactFilter from '../FilterContacts';
import styles from './Contacts.module.css';
import { PropsContactList } from './ContactListContainer';

const ContactList = ({
  contacts,
  onDeleteContact,
  editContact,
}: PropsContactList) => {
  const onDelete = ({
    currentTarget: { dataset },
  }: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) =>
    onDeleteContact(dataset.id);

  const filterEditContact = (
    e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const contact = contacts.find(
      ({ id }) => id === e.currentTarget.dataset.id,
    );
    editContact(contact);
  };

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
              className={styles.button + ' ' + styles.buttonEdit}
              onClick={filterEditContact}
            >
              Edit
            </button>
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

export default ContactList;
