import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Banner = () => {

  return (
    <div className=".container-fluid">
        <div>
        <img src={require('../../../assets/slider.jpg')} alt="" />
        </div>

    </div>
  );
};

export default Banner;