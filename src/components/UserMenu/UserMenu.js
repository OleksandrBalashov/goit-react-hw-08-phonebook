import React from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/auth';
import { logout } from '../../redux/auth';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, logout }) => {
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

const mapStateToProps = state => ({
  name: isAuthenticated(state),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
