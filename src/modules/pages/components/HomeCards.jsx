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
          <div>
          <img src={require('../../../assets/slider.jpg')} alt="" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
}

export default HomeCards;