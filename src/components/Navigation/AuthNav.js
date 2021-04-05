import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.wrap + ' ' + styles.authWrap}>
      {routes.map(
        ({ name, path, exact, isNavLink }) =>
          !isNavLink && (
            <li className={styles.items} key={path}>
              <NavLink
                to={path}
                exact={exact}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                {name}
              </NavLink>
            </li>
          ),
      )}
    </ul>
  );
};

export default AuthNav;
