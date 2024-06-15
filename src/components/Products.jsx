import React from 'react';
import Button from './Button';

const Products = ({ title, photo }) => {
  return (
    <div className='products'>
      <h2>{title}</h2>
      <img src={photo} alt={title} />
      <Button title='Shop Now' />
    </div>
  );
}

export default Products;