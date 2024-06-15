import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/carousel1.png';
import image2 from '../assets/carousel2.png';
import image3 from '../assets/carousel3.png';
import image4 from '../assets/carousel4.png';
const CarouselPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const items = [
    { src :  image1, alt: "Item 1" },
    { src: image2, alt: "Item 2" },
    { src: image3, alt: "Item 3" },
    { src: image4, alt: "Item 4" },
    { src: image2, alt: "Item 5" },
    { src: image1, alt: "Item 6" },
    { src: image3, alt: "Item 7" },
  
  ];

  return (
    <div className="carousel-part">
      <h2 style={{textAlign:'center'}}> New products</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.src} alt={item.alt} />
            <p style={{color:'#6f9ed6'}}>$449.99</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CarouselPart