import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterContacts.module.css';

const FilterContacts = ({ value, onChange, onClick }) => (
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

FilterContacts.defaultProps = {
  value: '',
};

FilterContacts.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterContacts;
