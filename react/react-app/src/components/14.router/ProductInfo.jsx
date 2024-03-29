import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { productId } = useParams();
  return <div>제품 상세 페이지지지지 베이베베이베베이베 {productId}</div>;
};

export default ProductInfo;
