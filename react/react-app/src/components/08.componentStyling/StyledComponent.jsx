import React from 'react';
import styled from 'styled-components';

export default function StyledComponent() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Wrapper = styled.div`
    padding: 4em;
    background-color: papayawhip;
  `;
  const Button = styled.button`
    background-color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  return (
    <Wrapper>
      <Title>안녕하세요</Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
}
