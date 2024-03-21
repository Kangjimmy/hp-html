import React from 'react';
import styled from 'styled-components';

export default function Pr02() {
  const Wrapper = styled.div`
    background-color: black;
    width: 1024px;
    padding: 2rem 1rem;
    margin: auto;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `;
  const Btn2 = styled.button`
    background-color: blue;
    border-radius: 4px;
    border: 2px solid yellowgreen;
    color: white;
  `;
  return (
    <Wrapper>
      <button>버튼1</button>
      <Btn2>버튼2</Btn2>
    </Wrapper>
  );
}
