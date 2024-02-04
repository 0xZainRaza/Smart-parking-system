import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Smart Parking</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
