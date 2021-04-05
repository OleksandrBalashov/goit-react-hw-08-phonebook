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

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.contact !== this.props.contact) {
      this.editContact();
    }
  };

  handleInputChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlerSubmitContactFrom = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (name === '' && number === '') return;

    !!this.state.id
      ? this.props.onPatchContact(this.state.id, { name, number })
      : this.props.onSubmitForm(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...this.props.initialState });
  };

  editContact = () => {
    this.setState({ ...this.props.contact });
  };

  render() {
    const { name, number } = this.state;
    const { name: userName } = this.props.contact;

    return (
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          {userName ? 'Edit contact' : 'Create contact'}
        </h2>
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
            {userName ? 'Edit contact' : 'Add contact'}
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
