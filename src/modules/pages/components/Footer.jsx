import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <div className="container-fluid">
        <div className='flex-container'>
          <div className='left-div mx-auto text --bs-warning-text-emphasis' >
            <ul>
           <li> <a href="./home">Home Page</a></li>
           <li> <a href="./product">All Product</a></li>
           <li> <a href="./contact">Contact</a></li>
            </ul>
          </div>
          <div className='right-div'>
            <iframe 
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d98474.0010569841!2d28.966194426437326!3d41.004206988491646!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d41.02909366423113!2d29.00180959295103!4m0!5e0!3m2!1str!2str!4v1705490936071!5m2!1str!2str" 
              width="400" 
              height="250" 
              style={{ border: 0, margin: 2, padding: 2}}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
