import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from '../Layout/Layout.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <Loader
      type="BallTriangle"
      color="#00BFFF"
      height={60}
      width={60}
      visible={true}
    />
  </div>
);

export default Spinner;
