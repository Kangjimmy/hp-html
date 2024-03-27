import React, { memo } from 'react';

const ChildComponent = (props) => {
  const { update } = props;
  console.log('child component 렌더링');
  return <div></div>;
};

export default memo(ChildComponent);
