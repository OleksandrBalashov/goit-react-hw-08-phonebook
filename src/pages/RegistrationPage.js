import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../redux/auth';
import Spinner from '../components/Spinner';
import { getLoading } from '../redux/loading/loading-selector';
import { getErrorMessage } from '../redux/error';
import ErrorPage from '../components/ErrorPage';
import styles from '../components/ContactForm/ContactForm.module.css';

class RegisterPage extends Component {
  static defaultProps = {
    initialState: {
      name: '',
      email: '',
      password: '',
    },
  };

  state = {
    ...this.props.initialState,
  };

  handlerSubmitForm = e => {
    e.preventDefault();

    this.props.registerUser(this.state);
    this.reset();
  };

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...this.props.initialState });
  };

  render() {
    const { name, email, password } = this.state;
    const { loading, error } = this.props;

    return (
      <div className={styles.wrap}>
        <h2 className={styles.title}>Registration</h2>
        <form className={styles.form} onSubmit={this.handlerSubmitForm}>
          <div className={styles.wrapLabel}>
            <label className={styles.label}>
              <p className={styles.text}>Name</p>
              <input
                type="text"
                name="name"
                value={name}
                placeholder=" "
                className={styles.input}
                onChange={this.handleChangeInput}
              />
            </label>
            <label className={styles.label}>
              <p className={styles.text}>Email:</p>
              <input
                type="email"
                name="email"
                value={email}
                placeholder=" "
                onChange={this.handleChangeInput}
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              <p className={styles.text}>Password:</p>
              <input
                stype="password"
                name="password"
                value={password}
                placeholder=" "
                className={styles.input}
                onChange={this.handleChangeInput}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Enter
          </button>
        </form>
        {loading && <Spinner />}
        {error && <ErrorPage />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: getLoading(state),
  error: getErrorMessage(state),
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
