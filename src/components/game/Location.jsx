import React from 'react';
import PropTypes from 'prop-types';

/**
 * Location component that represents a location in the game
 */
const Location = ({
  location,
  onNavigate,
  children,
  className = '',
}) => {
  if (!location) return null;

  return (
    <div 
      className={`location relative w-full h-full ${className}`}
      style={{
        backgroundImage: `url(${location.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Location overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      {/* Location name and description */}
      <div className="absolute top-4 left-4 max-w-md p-3 bg-white/80 backdrop-blur-sm rounded-md shadow-md">
        <h2 className="text-xl font-bold text-emerald-700">{location.name}</h2>
        <p className="text-sm text-gray-700">{location.description}</p>
      </div>
      
      {/* Interactive elements container (characters, clues, etc.) */}
      <div className="interactive-elements absolute inset-0 z-10">
        {children}
      </div>
      
      {/* Additional location information */}
      {location.hints && location.hints.length > 0 && (
        <div className="absolute bottom-20 left-4 max-w-xs p-3 bg-amber-50/90 backdrop-blur-sm border-l-4 border-amber-500 rounded-r-md shadow-md">
          <h3 className="text-sm font-semibold text-amber-800">Dica do Local:</h3>
          <p className="text-xs text-amber-700">{location.hints[0]}</p>
        </div>
      )}
      
      {/* Hotspots for detailed view or interactions */}
      {location.hotspots && location.hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          className="absolute cursor-pointer transform hover:scale-110 transition-transform duration-200"
          style={{
            left: `${hotspot.position.x}%`,
            top: `${hotspot.position.y}%`,
          }}
          onClick={() => hotspot.action && hotspot.action()}
        >
          <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {hotspot.name && (
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black/70 text-white text-xs rounded whitespace-nowrap">
              {hotspot.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    hints: PropTypes.arrayOf(PropTypes.string),
    hotspots: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired,
        action: PropTypes.func,
      })
    ),
  }).isRequired,
  onNavigate: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Location;