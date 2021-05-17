import React, { Component } from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { connect, ConnectedProps } from 'react-redux';
import { getTotalCount } from '../redux/contacts';
import { getErrorMessage } from '../redux/error';
import { fetchContacts } from '../redux/contacts';
import { getLoading } from '../redux/loading/loading-selector';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import { RootState } from '../redux/store';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

class ContactsPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { loading, errorMessage, totalCount } = this.props;
    return (
      <>
        <Layout>
          <ContactForm />
          {loading && <Spinner />}
          {errorMessage && <ErrorPage />}
          {totalCount !== 0 && <ContactList />}
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  totalCount: getTotalCount(state),
  loading: getLoading(state),
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = {
  fetchContacts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ContactsPage);
