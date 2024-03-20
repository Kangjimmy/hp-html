import React from 'react';

export default function PreventDefaultClick() {
  function linkClick(e) {
    e.preventDefault();
    console.log('link is clicked!');
  }
  return (
    <div>
      <a href='https://www.naver.com' onClick={linkClick}>
        클릭 해보세요.
      </a>
    </div>
  );
}
