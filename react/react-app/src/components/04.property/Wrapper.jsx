import React from 'react';

export default function Wrapper({ children }) {
  const style = {
    border: '3px solid red',
    padding: '20px',
  };
  return <div style={style}>{children}</div>;
}
