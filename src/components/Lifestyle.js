import React, { useState, useRef } from 'react';
import './Lifestyle.css';
import RectImg from '../assets/Rect1.png';
import ActivityImg from '../assets/rect3.png';
import sleepact from '../assets/rect4.png';
import stress from '../assets/rect5.png';
import socialconnect from '../assets/rect6.png';
import substanceabuse from '../assets/rect2.png';

const Lifestyle = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);

  const pillars = [
    {
      title: 'Nutrition',
      description:
        'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
      img: RectImg,
    },
    {
      title: 'Physical activity',
      description:
        'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
      img: ActivityImg,
    },
    {
      title: 'Restorative sleep',
      description:
        'Consistent, quality sleep is essential for cognitive function and physical health.',
      img: sleepact,
    },
    {
      title: 'Stress management',
      description:
        'Effective stress management techniques are crucial for mental well-being and overall health.',
      img: stress,
    },
    {
      title: 'Social Connection',
      description:
        'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
      img: socialconnect,
    },
    {
      title: 'Substance Abuse',
      description:
        'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
      img: substanceabuse,
    },
  ];

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="lifestyle">
      <div className="gradient-strip"></div> {/* Gradient strip */}
      <h2>How It Works</h2>
      <p>Lifestyle as medicine: The six pillars</p>
      <div className="tab-container">
        <button className="scroll-button left" onClick={() => scroll('left')}>
          <span className="arrow-icon">{'<'}</span>
        </button>
        <div className="tab-scroll" ref={scrollRef}>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {pillar.title}
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll('right')}>
          <span className="arrow-icon">{'>'}</span>
        </button>
      </div>
      <div className="pillar-cards">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`pillar ${activeTab === index ? 'highlighted' : ''}`}
          >
            <img src={pillar.img} alt={pillar.title} />
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;
