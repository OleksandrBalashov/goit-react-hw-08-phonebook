import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../../../redux/auth';
import routes from '../../../../../routes';

const PrivateRoutes = ({ isAuthenticated }) =>
  routes.map(
    ({ name, exact, path, component: Component, redirectTo, priv }) =>
      priv && (
        <Route
          exact={exact}
          path={path}
          key={name}
          render={props =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={redirectTo} />
            )
          }
        />
      ),
  );

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoutes);
