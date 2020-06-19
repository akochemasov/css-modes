import React from 'react';
import styled, {css} from 'styled-components'

//todo: улулчшить читабельность
const ButtonStyle = styled.button`
    background-color: green;    
    margin: 10px;
    
    /* The GitHub button is a primary button
    * edit this to target it specifically! */
    ${props => props.primary && css`
        background-color: white;
        color: black;
    `}
    
    1: 1        /* todo: проект соберется */ 
    color: white;
`;

const Button = (props) => {
  return (
    <>
      <ButtonStyle primary={props.primary}>Button 4</ButtonStyle>
    </>
  )
};

export default Button
