import React from 'react';
import '../App.css';

function HamburgerSVG() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#0074A9" strokeWidth="4" />
        <path d="M12 16H28M12 20H28M12 24H28" stroke="#0074A9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default HamburgerSVG;
