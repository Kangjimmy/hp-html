import React from 'react';

export default function Pr05_UserID({ onChangeId }) {
  return (
    <div>
      <h1>
        ID:{' '}
        <input
          type='text'
          onChange={(e) => {
            onChangeId(e.target.value);
          }}
        />
      </h1>
    </div>
  );
}
