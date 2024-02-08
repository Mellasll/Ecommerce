import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LiaShoppingBagSolid, LiaUser } from "react-icons/lia";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // withRouter ekledik
import AutoLogout from '../../Authlogout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.sass';

function Header() { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate() 
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        navigate('/login');
    };
      const token = localStorage.getItem('access_token')

    useEffect(()=> {
      if(token) {
        setIsLoggedIn(true)
        console.log(isLoggedIn,'is log');
      }
    },[token, isLoggedIn])
console.log(isLoggedIn,'test')
    return (
        <>
            <div className='Header'>
                <AutoLogout setIsLoggedIn={setIsLoggedIn} />
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Nav>
                            <Nav.Link href="./home">Home</Nav.Link>
                            <Nav.Link href="./product">Product</Nav.Link>
                            <Nav.Link href="./contact">Contact</Nav.Link>
                        </Nav>
                        <Navbar.Brand className='logo' href="./home">LOGO</Navbar.Brand>
                        <Nav className='userlink'> 
                            {isLoggedIn ? (
                                <NavDropdown title={<><LiaUser size={24}/></>} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                              <NavDropdown title={<><LiaUser size={24}/></>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="./login">Login</NavDropdown.Item>
                              </NavDropdown>
                            )}
                            <Nav.Link href="#pricing"><LiaShoppingBagSolid size={24} /></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
