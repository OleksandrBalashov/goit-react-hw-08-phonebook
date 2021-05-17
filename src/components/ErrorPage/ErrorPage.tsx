import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getErrorMessage } from '../../redux/error';
import styles from './ErrorPage.module.css';
import { RootState } from '../../redux/store';

export type PropsError = ConnectedProps<typeof connector>;

const ErrorPage = ({ message = '' }: PropsError) => (
  <div className={styles.wrap}>
    <h2>{message}</h2>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  message: getErrorMessage(state),
});

const connector = connect(mapStateToProps);

export default connector(ErrorPage);
