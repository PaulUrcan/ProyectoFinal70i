import React from 'react';

const CarouselImage = ({ text, src }) => {
  return (
    <div className='d-flex justify-content-center bg'>
    <img
      className="d-block w-25"
      src={src}
      alt={text}
    />
    </div>
  );
};

export default CarouselImage;