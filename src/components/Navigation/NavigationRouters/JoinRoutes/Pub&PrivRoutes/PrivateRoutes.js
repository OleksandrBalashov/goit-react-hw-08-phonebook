import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../../../redux/auth';
import routes from '../../../../../routes';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ isAuthenticated }) =>
  routes.map(
    ({ name, exact, path, component: Component, redirectTo, priv }) =>
      priv && (
        <Route
          exact={exact}
          path={path}
          key={name}
          render={props =>
            !!isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={redirectTo} />
            )
          }
        />
      ),
  );

PrivateRoutes.defaultProps = {
  isAuthenticated: null,
};

PrivateRoutes.propsTypes = {
  isAuthenticated: PropTypes.string,
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoutes);
