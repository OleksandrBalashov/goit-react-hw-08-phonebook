import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import AuthNav from '../Navigation/AuthNav';
import Navigation from '../Navigation';
import { isAuthenticated } from '../../redux/auth';
import Layout from '../Layout';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
import { RootState } from '../../redux/store';

export type PropsApp = ConnectedProps<typeof connector>;

const AppBar = ({ isAuthenticated }: PropsApp) => {
  return (
    <header className={styles.header}>
      <Layout>
        <nav className={styles.nav}>
          <Navigation />
          {!!isAuthenticated ? <UserMenu /> : <AuthNav />}
        </nav>
      </Layout>
    </header>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: isAuthenticated(state),
});

const connector = connect(mapStateToProps);

export default connector(AppBar);
