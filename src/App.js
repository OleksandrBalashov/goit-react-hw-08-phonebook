import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Layout from './components/Layout';
import NavigationRoutes from './components/Navigation/NavigationRouters';
import { getLoginUser } from './redux/auth';

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

const mapDispatchToProps = {
  getLoginUser,
};

export default connect(null, mapDispatchToProps)(App);
