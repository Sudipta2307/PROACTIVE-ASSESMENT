import React from 'react';
import './SearchBar.css';


import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      {/* Image Carousel Section */}
      <div className="image-carousel-background">
        <div className="image-carousel">
          <div className="image-column scroll-down">
            <img src={image1} alt="Lifestyle 1" />
            <img src={image2} alt="Lifestyle 2" />
            <img src={image3} alt="Lifestyle 3" />
          </div>
          <div className="image-column scroll-up">
            <img src={image4} alt="Lifestyle 4" />
            <img src={image5} alt="Lifestyle 5" />
            <img src={image6} alt="Lifestyle 6" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="search-bar-content">
        <div className="search-bar-header">
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Condition, procedure, specialty" />
          <input type="text" placeholder="City, state, or zipcode" />
          <select>
            <option>Insurance carrier</option>
            <option>Provider 1</option>
            <option>Provider 2</option>
          </select>
          <button>Find now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;