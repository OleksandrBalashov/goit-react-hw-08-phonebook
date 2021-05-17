import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../../redux/auth';
import routes from '../../routes';
import styles from './Navigation.module.css';
import { RootState } from '../../redux/store';

type PropsNavigation = ConnectedProps<typeof connector>;

const Navigation = ({ isAuthenticated }: PropsNavigation) => {
  return (
    <ul className={styles.wrap}>
      {routes.map(({ name, path, exact, isNavLink }) => {
        if (!isAuthenticated && name === 'Contacts') return null;

        return (
          isNavLink && (
            <li key={path} className={styles.items}>
              <NavLink
                to={path}
                exact={exact}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                {name}
              </NavLink>
            </li>
          )
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: isAuthenticated(state),
});

const connector = connect(mapStateToProps);

export default connector(Navigation);
