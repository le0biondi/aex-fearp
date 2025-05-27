import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Clue component that represents a collectible clue in the game
 */
const Clue = ({
  clue,
  onClick,
  className = '',
}) => {
  const [isHovering, setIsHovering] = useState(false);

  if (!clue) return null;

  // Ensure clue type has a value for styling
  const clueType = clue.type || 'physical';

  // Different styling based on clue type
  const clueStyles = {
    physical: 'bg-amber-100 border-amber-500',
    document: 'bg-blue-100 border-blue-500',
    testimonial: 'bg-green-100 border-green-500',
    data: 'bg-purple-100 border-purple-500',
    digital: 'bg-indigo-100 border-indigo-500',
  };

  // Different icons based on clue type
  const getClueIcon = (type) => {
    switch(type) {
      case 'physical':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'testimonial':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'data':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'digital':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
    }
  };

  return (
    <div 
      className={`clue-container absolute cursor-pointer ${className}`}
      style={{
        left: clue.position ? `${clue.position.x}%` : '50%',
        top: clue.position ? `${clue.position.y}%` : '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: isHovering ? 10 : 5,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onClick && onClick(clue)}
    >
      {/* Pulsing effect around the clue */}
      <div className="absolute -inset-2 rounded-full bg-white opacity-0 animate-ping-slow group-hover:opacity-20"></div>
      
      {/* Main clue container with icon */}
      <div className={`
        relative flex items-center justify-center 
        w-12 h-12 rounded-full shadow-md
        border-2 transition-all duration-300
        ${clueStyles[clueType] || clueStyles.physical}
        ${isHovering ? 'scale-110 shadow-lg' : ''}
      `}>
        <div className="text-gray-700">
          {getClueIcon(clueType)}
        </div>
      </div>
      
      {/* Clue name tooltip */}
      {isHovering && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white rounded-md shadow-md z-10 whitespace-nowrap">
          <span className="text-sm font-medium text-gray-800">{clue.name}</span>
        </div>
      )}
      
      {/* Collection indicator */}
      <div className="absolute -top-1 -right-1">
        <div className="flex items-center justify-center w-5 h-5 bg-emerald-500 rounded-full border-2 border-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

Clue.propTypes = {
  clue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['physical', 'document', 'testimonial', 'data', 'digital']),
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    image: PropTypes.string,
    content: PropTypes.string,
    relatedSDGs: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Clue;