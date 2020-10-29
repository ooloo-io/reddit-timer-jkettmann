import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Logo, HeaderLink } from './Header.style';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <HeaderLink to="/search/javascript">
          Search
        </HeaderLink>
        <HeaderLink to="/#how-it-works" as={HashLink}>
          How it works
        </HeaderLink>
        <HeaderLink to="/#about" as={HashLink}>
          About
        </HeaderLink>
      </nav>
    </Container>
  );
}

export default Header;
