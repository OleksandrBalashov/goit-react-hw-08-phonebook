import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from '../Layout/Layout.module.css';

const Spinner = () => (
  <Loader
    className={styles.spinner}
    type="BallTriangle"
    color="#00BFFF"
    height={60}
    width={60}
    visible={true}
  />
);

export default Spinner;
