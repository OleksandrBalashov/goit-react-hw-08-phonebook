import React from 'react';
import styles from './FilterContacts.module.css';
import { PropsFilter } from './FilterContactsContainer';

const FilterContacts = ({ value, onChange, onClick }: PropsFilter) => {
  return (
    <>
      <div className={styles.wrap}>
        <h3 className={styles.text}>Find contacts by name:</h3>
        {value !== '' && (
          <button className={styles.buttonBack} onClick={onClick}>
            &#10226;
          </button>
        )}
      </div>

      <label className={styles.label}>
        <input
          type="text"
          className={styles.input}
          placeholder=" "
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default FilterContacts;
