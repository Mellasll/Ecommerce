import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='banner'>
      <Slider {...sliderSettings}>
        <div>
            <img src={`https://weepay.co/blog/wp-content/uploads/2021/08/eticaret-1536x449.jpg`} alt="" />
        </div>
        <div>
            <img src={`https://weepay.co/blog/wp-content/uploads/2021/08/e-ticarette-slider.jpg`} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;