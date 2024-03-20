import React from 'react';

export default function ChildComponent({ children }) {
  return (
    <div>
      <h1>children값은 {children} 입니다.</h1>
    </div>
  );
}
