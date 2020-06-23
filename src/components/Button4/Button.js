import React from 'react';
import styled, {css} from 'styled-components/macro'

const getButtonStyles = ({type}) => {
    switch (type) {
        case 'error':
            return css`
                color: red;
            `;

        case 'message':
            return css`
                background-color: gray;
            `;

        default:
          break;
    }
};

const ButtonStyle = styled.button`
    background-color: green;
    
    /* The GitHub button is a primary button
    * edit this to target it specifically! */
    ${props => props.primary && css`
        background-color: white;
        color: black;
    `}
    
    ${getButtonStyles}
    
    1: 1        /* todo: проект соберется */ 
    
    color: white; /* стиль не применится, из-за ошибки выше */
`;

const Button = (props) => {
  return (
    <>
      <ButtonStyle primary={props.primary} type={props.type}>Button Styled Component</ButtonStyle>
    </>
  )
};

export default Button
