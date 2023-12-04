import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin-right: 30px;
    font-weight: bold;
  }

  a:last-of-type {
    margin-right: 0;
  }

  svg {
    transition: 300ms;
  }

  svg:hover {
    transform: scale(1.25);
  }
`;
