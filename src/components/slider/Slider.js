import React from "react";
import Slider from "react-slick";
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg from "./SliderImg"

export default function SimpleSlider(props) {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    adaptiveHeight: true
  };

  let Img =[
    {
      img:"",
      alt:""
  }];

  Img = SliderImg;

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Img.map((x)=>{
          return(
          <div className="slider-item-container" key={x.alt}>
            <img className="slider-item-img" src={process.env.PUBLIC_URL+x.img} alt={x.alt}/>
          </div>
          )
        })}
      </Slider>
    </div>
  );
}