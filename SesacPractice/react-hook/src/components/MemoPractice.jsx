import React, { useState, useMemo } from 'react';
import '../style/MemoPractice.scss';

export default function MemoPractice() {
  // 상품 가격 제한 상태 관리
  const [priceLimit, setPriceLimit] = useState();
  const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 50 },
    { name: 'Product C', price: 70 },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(
      product => !priceLimit || product.price <= Number(priceLimit),
    );
  }, [
    /* 의존성 배열 작성 */
    priceLimit,
    products,
  ]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type="number"
        value={priceLimit}
        placeholder="Enter price limit"
        onChange={e => setPriceLimit(e.target.value)}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product}>
            {product.name}-${product.price}
          </li>
        ))}{' '}
      </ul>
    </div>
  );
}
