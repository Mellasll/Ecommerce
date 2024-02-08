import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="Card">
      <Slider {...settings}>
        <div>
          <img src={require('../../../assets/bg.png')} alt="" />
        </div>

        <div>
         <img src={require('../../../assets/bg2.png')} alt="" />
        </div>

        <div>
          <img src={require('../../../assets/bg3.png')} alt="" />  
        </div>

      </Slider>
    </div>
  );
}

export default Banner;