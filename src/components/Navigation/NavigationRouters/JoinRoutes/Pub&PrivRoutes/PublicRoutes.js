import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../../../../redux/auth';
import routes from '../../../../../routes';
import PropTypes from 'prop-types';

const PublicRoutes = ({ isAuthenticated }) =>
  routes.map(
    ({
      name,
      exact,
      path,
      component: Component,
      restricted,
      redirectTo,
      priv,
    }) =>
      !priv && (
        <Route
          exact={exact}
          path={path}
          key={name}
          render={props =>
            !!isAuthenticated && restricted ? (
              <Redirect to={redirectTo} />
            ) : (
              <Component {...props} />
            )
          }
        />
      ),
  );

PublicRoutes.defaultProps = {
  isAuthenticated: null,
};

PublicRoutes.propsTypes = {
  isAuthenticated: PropTypes.string,
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoutes);
