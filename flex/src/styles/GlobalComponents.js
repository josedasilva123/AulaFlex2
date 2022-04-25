import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  transition: 0.3s;
  ${(props) => {
    switch (props.buttonSize) {
      case "big":
        return css`
          padding: 0 2rem;
          height: 54px;
        `;
      case "small":
        return css`
          padding: 0 1.5rem;
          height: 42px;
        `;
      default:
        return css`
          padding: 0 2rem;
          height: 48px;
        `;
    }
  }}
  ${(props) => {
    switch (props.buttonStyle) {
      case "outline1":
        return css`
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          &:hover{
            background: #fff;
            border-color: #fff;
            color: #001e32;   
          }   
          &:disabled{
              cursor: not-allowed;
              opacity: .5;
              border-color: #fafafa;
              color: #fafafa;
              &:hover{
                background: transparent;  
                border-color: #fafafa;
                color: #fafafa; 
              }
          }       
        `;
      default:
        return css`
          background: #001e32;
          border: 2px solid #001e32;
          color: #fff;
          &:hover{
            background: #fff;
            border-color: #fff;
            color: #001e32;   
          }   
          &:disabled{
              cursor: not-allowed;
              opacity: .5;
              background: #aaa;
              border-color: #aaa;
              color: #fff;
              &:hover{
                background: #aaa;
                border-color: #aaa;
                color: #fff;
              }
          }             
        `;
    }
  }}
`;

/*
    1 Outline
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: 0 2rem;
    height: 48px;
    transition: .3s;

    2 Solid
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    background: #001e32;
    border: 2px solid #001e32;
    color: #fff;
    padding: 0 2rem;
    height: 48px;
    transition: .3s;

    3 Solid 2
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    background: #001e32;
    border: 2px solid #001e32;
    color: #fff;
    padding: 0 2rem;
    height: 48px;
    transition: .3s;

*/
