import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dialog component for displaying character dialogues and player choices
 */
const Dialog = ({
  character,
  message,
  choices = [],
  onChoiceSelected,
  onClose,
  showCloseButton = false,
  className = '',
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${className}`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={showCloseButton ? onClose : undefined}
      />
      
      {/* Dialog container */}
      <div className="relative w-full max-w-3xl mx-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden flex flex-col border-2 border-emerald-600 animate-fadeIn">
        {/* Character info header */}
        {character && (
          <div className="bg-emerald-700 p-4 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
              <img 
                src={character.avatar} 
                alt={character.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">{character.name}</h3>
              <p className="text-sm opacity-80">{character.role}</p>
            </div>
          </div>
        )}
        
        {/* Message content */}
        <div className="p-6 my-2 text-gray-800 text-lg leading-relaxed">
          {message}
        </div>
        
        {/* Choices */}
        {choices && choices.length > 0 && (
          <div className="p-4 bg-gray-100 border-t border-gray-200">
            <h4 className="text-sm uppercase text-gray-500 font-medium mb-3">Suas opções:</h4>
            <div className="flex flex-col gap-2">
              {choices.map(choice => (
                <button
                  key={choice.id}
                  className="text-left p-3 border border-gray-300 rounded-lg hover:bg-emerald-50 hover:border-emerald-500 transition-colors"
                  onClick={() => onChoiceSelected(choice)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Close button (when there are no choices) */}
        {showCloseButton && (
          <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-center">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    avatar: PropTypes.string,
  }),
  message: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      nextNodeId: PropTypes.string,
      revealClueId: PropTypes.string,
      revealSDGId: PropTypes.number,
      completeObjective: PropTypes.string,
    })
  ),
  onChoiceSelected: PropTypes.func,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
};

export default Dialog;