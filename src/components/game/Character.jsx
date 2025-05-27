import React from 'react';
import PropTypes from 'prop-types';

/**
 * Character component that represents an interactive character in the game
 */
const Character = ({
  character,
  onClick,
  className = '',
}) => {
  if (!character) return null;

  return (
    <div 
      className={`character-container absolute cursor-pointer transition-transform duration-200 hover:scale-105 ${className}`}
      style={{
        left: character.position ? `${character.position.x}%` : '50%',
        top: character.position ? `${character.position.y}%` : '50%',
      }}
      onClick={() => onClick && onClick(character)}
    >
      {/* Character avatar with highlight effect */}
      <div className="relative">
        <div className="character-avatar w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <img 
            src={character.avatar} 
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Interactive indicator */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Character name tooltip */}
      <div className="character-name mt-1 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-md text-center">
        <span className="text-sm font-medium text-gray-800">{character.name}</span>
      </div>
      
      {/* Status indicators (optional) */}
      {character.status && (
        <div className={`
          absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-medium
          ${character.status === 'new' ? 'bg-blue-500 text-white' : ''}
          ${character.status === 'important' ? 'bg-red-500 text-white' : ''}
          ${character.status === 'available' ? 'bg-green-500 text-white' : ''}
        `}>
          {character.status === 'new' && 'Novo'}
          {character.status === 'important' && '!'}
          {character.status === 'available' && '✓'}
        </div>
      )}
      
      {/* New conversation indicator (optional) */}
      {character.hasNewDialogue && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    status: PropTypes.oneOf(['new', 'important', 'available', 'unavailable']),
    hasNewDialogue: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Character;