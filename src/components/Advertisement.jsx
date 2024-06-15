import React from 'react';
import image from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Advertisement = () => {
  return (
    <section className='advertisement-section'>
      <div className='main-image'>
        <img src={image} alt="Main Advertisement" />
      </div>
      <div className='side-images'>
        <img src={image2} alt="Side Image 1" />
        <img src={image3} alt="Side Image 2" />
      </div>
    </section>
  );
}

export default Advertisement;