import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loginUser } from '../redux/auth';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import { getLoading } from '../redux/loading/loading-selector';
import { getErrorMessage } from '../redux/error';
import styles from '../components/ContactForm/ContactForm.module.css';
import { RootState } from '../redux/store';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

class LoginPage extends Component<Props> {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: value });
  };

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === '' && password === '') return;

    this.props.loginUser(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
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

const mapStateToProps = (state: RootState) => ({
  loading: getLoading(state),
  error: getErrorMessage(state),
});

const mapDispatchToProps = {
  loginUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(LoginPage);
