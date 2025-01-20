import React, { useState, useCallback, useEffect } from 'react';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

export default function CallbackPractice() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(
    product => {
      // 장바구니에 상품 추가 로직 작성
    },
    [
      /* 의존성 배열 */
    ],
  );

  const removeFromCart = useCallback(
    productId => {
      // 장바구니에서 상품 제거 로직 작성
    },
    [
      /* 의존성 배열 */
    ],
  );

  // addToCart 참조값 변경 여부 확인 [useEffect]

  // removeFromCart 참조값 변경 여부 확인 [useEffect]

  return (
    <div>
      <h2>Products</h2>
      <ul>// 상품 목록</ul>

      <h2>Shopping Cart</h2>
      <ul>// 쇼핑 카트에 추가된 목록</ul>
    </div>
  );
}
