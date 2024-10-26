// hooks/useProductId.js
import { useParams } from 'react-router-dom';

const useProductId = () => {
  const { productId } = useParams();
  return productId;
};

export default useProductId;
