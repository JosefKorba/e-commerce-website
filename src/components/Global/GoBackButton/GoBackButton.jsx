
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <button onClick={handleGoBack}>Go Back</button>
  );
};

export default GoBackButton;