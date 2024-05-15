import styles from './GoBackButton';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <button className={styles.BackButton} onClick={handleGoBack}>Go Back</button>
  );
};

export default GoBackButton;