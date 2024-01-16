import {Container, Nav, Navbar } from 'react-bootstrap';
import { LiaShoppingBagSolid, LiaUser } from "react-icons/lia";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.sass'
function Header() {
    return (
      <>
      <div className='header'>
        <Navbar bg="light" data-bs-theme="light">
          <Container>

            <Nav className="link">
              <Nav.Link href="./home">Home</Nav.Link>
              <Nav.Link href="./product">Product</Nav.Link>
              <Nav.Link href="./contact">Contact</Nav.Link>
            </Nav>

            <Navbar.Brand className='logo' href="./home">LOGO</Navbar.Brand>
            
            <Nav className='userlink' >
                <Nav.Link href="./login"  > <LiaUser /> </Nav.Link>
                <Nav.Link href="#pricing" > <LiaShoppingBagSolid /> </Nav.Link>
            </Nav>

          </Container>
        </Navbar>
    </div>  </>
    );
  }
  
  export default Header;