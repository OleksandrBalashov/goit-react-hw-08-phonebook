import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { registerUser } from '../redux/auth';
import Spinner from '../components/Spinner';
import { getLoading } from '../redux/loading/loading-selector';
import { getErrorMessage } from '../redux/error';
import ErrorPage from '../components/ErrorPage';
import styles from '../components/ContactForm/ContactForm.module.css';
import { RootState } from '../redux/store';
import { RegisterType } from '../interfaces/interfaces';

type PropsRegister = ConnectedProps<typeof connector>;

interface StateTypes {
  name: string;
  email: string;
  password: string;
}

interface PropsTypes extends PropsRegister {
  loading: boolean;
  error: string;
}

class RegisterPage extends Component<PropsTypes, StateTypes> {
  state: StateTypes = {
    name: '',
    email: '',
    password: '',
  };

  handlerSubmitForm = (e: React.FormEvent<HTMLFormElement>): void | null => {
    e.preventDefault();

    const { name, email, password } = this.state;

    if (name === '' && email === '' && password === '') return;

    this.props.registerUser(this.state);

    this.reset();
  };

  handleChangeInput = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: value } as Pick<StateTypes, keyof StateTypes>);
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
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
                type="password"
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

const mapStateToProps = (state: RootState) => ({
  loading: getLoading(state),
  error: getErrorMessage(state),
});

const mapDispatchToProps = {
  registerUser: (user: RegisterType) => registerUser(user),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(RegisterPage);
