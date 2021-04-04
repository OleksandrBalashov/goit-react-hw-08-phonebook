import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    initialState: {
      name: '',
      number: '',
    },
  };

  state = {
    ...this.props.initialState,
  };

  handleInputChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlerSubmitContactFrom = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (name === '' && number === '') return;

    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.props.initialState });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.wrap}>
        <h2 className={styles.title}>Create contact</h2>
        <form className={styles.form} onSubmit={this.handlerSubmitContactFrom}>
          <div className={styles.wrapLabel}>
            <label className={styles.label}>
              <p className={styles.text}>Name</p>
              <input
                type="text"
                name="name"
                className={styles.input}
                value={name}
                placeholder=" "
                onChange={this.handleInputChange}
              />
            </label>
            <label className={styles.label}>
              <p className={styles.text}>Phone</p>
              <input
                type="tel"
                name="number"
                className={styles.input}
                value={number}
                placeholder=" "
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
