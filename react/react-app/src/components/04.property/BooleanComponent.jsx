import React from 'react';

export default function BooleanComponent({ bored }) {
  const message = bored ? '놀러가자' : '하던일 열심히 하자';
  return <div>{message}</div>;
}
