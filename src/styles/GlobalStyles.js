import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryColor};
  }

  html, body, #root {
    /* height: 100vh; */
  }

  button {
    background-color: ${primaryColor};
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px 20px;
    font-weight: 700;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 2%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;
