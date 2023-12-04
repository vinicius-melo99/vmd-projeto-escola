import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Nav } from './styled';

function Header() {
  const [iconDefaultSize] = useState(28);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={iconDefaultSize} />
      </Link>
      <Link to="">
        <FaSignInAlt size={iconDefaultSize} />
      </Link>
      <Link to="">
        <FaUserAlt size={iconDefaultSize} />
      </Link>
    </Nav>
  );
}

export default Header;
