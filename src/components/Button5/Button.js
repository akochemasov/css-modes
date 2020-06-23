import React from 'react';
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
  background-color: hotpink;
  color: black;
  &:hover {
    color: ${props => props.color};
  }
`;

const Container = styled.div(props => ({
    display: 'inline-block',
    border: props.border && '1px solid green'
}));

const Button = (props) => {
  return (
    <Container border>
        <ButtonStyle color={'white'}>Button Emotion</ButtonStyle>
    </Container>
  )
};

export default Button
