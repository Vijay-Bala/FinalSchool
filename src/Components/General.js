// General.js

import React from 'react';
import ImageSlider from './ImageSlider'; // Assuming ImageSlider component is in a separate file
import Features from './Features'; // Assuming Features component is in a separate file
import Testimonial from './Testimonial';

const General = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5vh',
  };

  return (
    <div style={containerStyle}>
      {/* <div style={{ marginBottom: '5vh' }}>
        <ImageSlider />
      </div> */}
      <div style={{ marginBottom: '5vh' }}>
        <Testimonial />
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
};

export default General;
