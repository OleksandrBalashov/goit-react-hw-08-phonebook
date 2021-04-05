import React from 'react';
import { connect } from 'react-redux';
import AuthNav from '../Navigation/AuthNav';
import Navigation from '../Navigation';
import { isAuthenticated } from '../../redux/auth';
import Layout from '../Layout';
import UserMenu from '../UserMenu';

import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Layout>
        <nav className={styles.nav}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </nav>
      </Layout>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
