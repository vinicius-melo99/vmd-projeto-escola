import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Nav } from './styled';

function Header() {
  const [iconDefaultSize] = useState(28);

  return (
    <Nav>
      <a href="">
        <FaHome size={iconDefaultSize} />
      </a>
      <a href="">
        <FaSignInAlt size={iconDefaultSize} />
      </a>
      <a href="">
        <FaUserAlt size={iconDefaultSize} />
      </a>
    </Nav>
  );
}

export default Header;
