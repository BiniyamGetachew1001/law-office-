import React from 'react';

export default function EthiopiaMap() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Ethiopia map outline - simplified version */}
        <path
          d="M400 100C250 100 150 200 150 350C150 500 250 600 400 700C550 600 650 500 650 350C650 200 550 100 400 100Z"
          fill="currentColor"
          className="text-law-beige-300 dark:text-law-brown-700"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Major cities */}
        <circle cx="400" cy="350" r="10" fill="currentColor" className="text-law-brown-800 dark:text-law-beige-500" />
        <text x="420" y="350" className="text-sm font-medium fill-current text-law-brown-900 dark:text-law-beige-100">Addis Ababa</text>

        <circle cx="300" cy="250" r="6" fill="currentColor" className="text-law-brown-800 dark:text-law-beige-500" />
        <text x="310" y="250" className="text-xs font-medium fill-current text-law-brown-900 dark:text-law-beige-100">Bahir Dar</text>

        <circle cx="500" cy="300" r="6" fill="currentColor" className="text-law-brown-800 dark:text-law-beige-500" />
        <text x="510" y="300" className="text-xs font-medium fill-current text-law-brown-900 dark:text-law-beige-100">Dire Dawa</text>

        {/* Office locations */}
        <circle cx="400" cy="350" r="8" fill="currentColor" className="text-law-beige-500 dark:text-law-brown-500" stroke="currentColor" strokeWidth="2" />
        <circle cx="300" cy="250" r="6" fill="currentColor" className="text-law-beige-500 dark:text-law-brown-500" stroke="currentColor" strokeWidth="2" />
        <circle cx="500" cy="300" r="6" fill="currentColor" className="text-law-beige-500 dark:text-law-brown-500" stroke="currentColor" strokeWidth="2" />

        {/* Title */}
        <text x="400" y="150" textAnchor="middle" className="text-xl font-bold fill-current text-law-brown-900 dark:text-law-beige-100">Our Offices in Ethiopia</text>
      </svg>
    </div>
  );
}
