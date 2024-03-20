import React from 'react';

export default function Pr05_UserPW({ onChangePw }) {
  return (
    <div>
      <h1>
        PW:{' '}
        <input
          type='text'
          onChange={(e) => {
            onChangePw(e.target.value);
          }}
        />
      </h1>
    </div>
  );
}
