import React from 'react';
import { connect } from 'react-redux';
import { getErrorMessage } from '../../redux/error';
import PropTypes from 'prop-types';
import styles from './ErrorPage.module.css';

const ErrorPage = ({ message = '' }) => (
  <div className={styles.wrap}>
    <h2>{message}</h2>
  </div>
);

const mapStateToProps = state => ({
  message: getErrorMessage(state),
});

ErrorPage.propTypes = {
  message: PropTypes.string,
};

export default connect(mapStateToProps)(ErrorPage);
