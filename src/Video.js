import React, { useState, useEffect } from 'react';

const Video = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); // Set opacity to 0 before changing image
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11); // Change 11 to the total number of images
        setImageOpacity(1); // Set opacity back to 1 after changing image
      }, 1500); // Adjust the transition time
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh', // Add margin-top
    width:"90vw",
    height:"70vh",
  };

  
  return (
    <div style={containerStyle}>
      
            <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '100%',width:"75%"  }}>
            <iframe width="100%"
                height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  );
};

export default Video;