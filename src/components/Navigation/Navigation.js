import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../../redux/auth';
import routes from '../../routes';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
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

Navigation.defaultProps = {
  isAuthenticated: null,
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.string,
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
