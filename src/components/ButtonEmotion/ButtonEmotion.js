import React from 'react';
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
  background-color: hotpink;
  color: black;
  1 22        /* todo: проект соберется, но не попадут в css */
  &:hover {
    color: ${props => props.color};
  }
`;

const Container = styled.div(props => ({
    display: 'inline-block',
    border: props.border && '1px solid green'
}));

const ButtonEmotion = () => {
  return (
    <Container border>
        <ButtonStyle color={'white'}>Button Emotion</ButtonStyle>
    </Container>
  )
};

export default ButtonEmotion
