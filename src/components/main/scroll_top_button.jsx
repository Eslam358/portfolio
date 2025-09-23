// ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import './scroll_top_button.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(scrollTop > 150);

      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (

    <button
      className={`test button float icon-chevron-up flex center ${isVisible?"active":""} ${!isVisible?"active_":""}`}
      onClick={()=>scrollToTop()}
    >
      

      <svg 
         className="button_top"

      
      width="48" height="48">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="#3498db"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

    </button>
  );
};

export default ScrollToTop;


      {/* <i className=" icon-chevron-up"></i> */}
      {/* <i className="fas fa-arrow-up icon"></i> */}