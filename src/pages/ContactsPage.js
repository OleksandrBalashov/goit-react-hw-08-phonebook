import React, { Component } from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { getTotalCount } from '../redux/contacts';
import { getErrorMessage } from '../redux/error';
import { fetchContacts } from '../redux/contacts';
import { getLoading } from '../redux/loading/loading-selector';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import PropTypes from 'prop-types';

class ContactsPage extends Component {
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

ContactsPage.defaultProps = {
  loading: false,
  errorMessage: '',
};

ContactsPage.propTypes = {
  totalCount: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  fetchContacts: PropTypes.func,
};

const mapStateToProps = state => ({
  totalCount: getTotalCount(state),
  loading: getLoading(state),
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = {
  fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
