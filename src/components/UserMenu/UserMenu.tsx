import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { isAuthenticated } from '../../redux/auth';
import { logout } from '../../redux/auth';
import { RootState } from '../../redux/store';
import styles from './UserMenu.module.css';

type PropsUserMenu = ConnectedProps<typeof connector>;

const UserMenu = ({ name = '', logout }: PropsUserMenu) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
        <img
          src="https://freesvg.org/img/Male-Avatar.png"
          alt=""
          width="40"
          className={styles.avatar}
        />
        <span className={styles.text}>Welcome, {name}</span>
        <button type="button" className={styles.button} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  name: isAuthenticated(state),
});

const mapDispatchToProps = {
  logout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserMenu);
