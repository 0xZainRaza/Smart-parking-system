import { Navbar, Container, Nav } from 'react-bootstrap';
import backImg from '../assets/img/header_back2.jpg';

function Header() {
  return (
    <div style={{backgroundImage: `url(${backImg}`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', height: '110px'}}>
      <Navbar data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img style={{height: '100px'}}src='src/assets/img/header_name_pic.png' />Blockchain Based Smart Parking</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
