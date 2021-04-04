import React from 'react';
import { connect } from 'react-redux';
import { getErrorMessage } from '../../redux/error';
import styles from './ErrorPage.module.css';

const ErrorPage = ({ message }) => (
  <div className={styles.wrap}>
    <h2>{message}</h2>
  </div>
);

const mapStateToProps = state => ({
  message: getErrorMessage(state),
});

export default connect(mapStateToProps)(ErrorPage);
