import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Layout from './components/Layout';
import NavigationRoutes from './components/Navigation/NavigationRouters';
import { getLoginUser } from './redux/auth';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    this.props.getLoginUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Layout>
          <NavigationRoutes />
        </Layout>
      </>
    );
  }
}

App.propTypes = {
  getLoginUser: PropTypes.func,
};

const mapDispatchToProps = {
  getLoginUser,
};

export default connect(null, mapDispatchToProps)(App);
