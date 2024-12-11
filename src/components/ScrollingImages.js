import React from "react";
import "./ScrollingImages.css";

const ScrollingImages = () => {
  const imagesColumn1 = ["../assets/image1.png", "/assets/img2.png", "/assets/img3.png"];
  const imagesColumn2 = ["/assets/img4.png", "/assets/img5.png", "/assets/img6.png"];

  return (
    <div className="scrolling-container">
      <div className="image-column column-1">
        {imagesColumn1.map((image, index) => (
          <img key={index} src={image} alt={`Column 1 - ${index}`} className="scrolling-image" />
        ))}
      </div>

      
      <div className="image-column column-2">
        {imagesColumn2.map((image, index) => (
          <img key={index} src={image} alt={`Column 2 - ${index}`} className="scrolling-image" />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
