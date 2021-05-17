import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import AppBar from './components/AppBar';
import Layout from './components/Layout';
import NavigationRoutes from './components/Navigation/NavigationRouters';
import { getLoginUser } from './redux/auth';

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  getLoginUser(): Promise<void>;
}

class App extends Component<Props> {
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

const connector = connect(null, mapDispatchToProps);

export default connector(App);
