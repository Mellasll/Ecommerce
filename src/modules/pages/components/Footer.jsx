import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { FaLinkedin,FaInstagram, FaFacebook,FaGooglePlus,FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <Container fluid className='bg-light' >
      <Row>
          <Col>
          <h3>QUICK LINKS</h3>
            <ul>
              <li> <a href="./home">Home Page</a></li>
              <li> <a href="./product">All Products</a></li>
              <li> <a href="./contact">Contact</a></li>
            </ul>
          </Col>

          <Col>
          <h3>FOLLOW US</h3>
          <br/>
          <div className='footerlogo'>
            <span className='logo'> <FaTwitter size={25}/> </span>
            <span className='logo'> <FaInstagram size={25}/> </span>
            <span className='logo'> <FaFacebook size={25}/> </span>
            <span className='logo'> <FaGooglePlus size={25}/> </span>
            <span className='logo'> <FaLinkedin size={25}/> </span>
         </div> 
         </Col>

          <Col xs={4}>
            <iframe 
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d98474.0010569841!2d28.966194426437326!3d41.004206988491646!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d41.02909366423113!2d29.00180959295103!4m0!5e0!3m2!1str!2str!4v1705490936071!5m2!1str!2str" 
                  width="100%" 
                  height="95%" 
                  style={{ border: 0}}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
          </Col>
      </Row>

   </Container>

</>
  );
};

export default Footer;
