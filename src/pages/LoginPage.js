import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/auth';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import { getLoading } from '../redux/loading/loading-selector';
import { getErrorMessage } from '../redux/error';
import PropTypes from 'prop-types';
import styles from '../components/ContactForm/ContactForm.module.css';

class LoginPage extends Component {
  static defaultProps = {
    initialState: {
      email: '',
      password: '',
    },
  };

  state = {
    ...this.props.initialState,
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === '' && password === '') return;

    this.props.loginUser(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.props.initialState });
  };

  render() {
    const { email, password } = this.state;
    const { loading, error } = this.props;

    return (
      <div className={styles.wrap}>
        <h2 className={styles.title}>Enter our login</h2>
        <form className={styles.form} onSubmit={this.onSubmitForm}>
          <div className={styles.wrapLabel}>
            <label className={styles.label}>
              <p className={styles.text}>Email:</p>
              <input
                type="email"
                name="email"
                value={email}
                placeholder=" "
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              <p className={styles.text}>Password:</p>
              <input
                type="password"
                name="password"
                value={password}
                placeholder=" "
                className={styles.input}
                onChange={this.handleChange}
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

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  loginUser: PropTypes.func,
};

const mapStateToProps = state => ({
  loading: getLoading(state),
  error: getErrorMessage(state),
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
