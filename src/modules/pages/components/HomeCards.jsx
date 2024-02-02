import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeCards = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500
    };

    return (
      <div className="Card">
        <a href="./product">See All</a>
        <Slider {...settings}>
          <div >
          <img src={require('../../../assets/slider.jpg')} alt="" />
          </div>
         
        </Slider>
      </div>
    );
}

export default HomeCards;