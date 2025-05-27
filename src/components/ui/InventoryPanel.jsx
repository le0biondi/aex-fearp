import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * InventoryPanel component for displaying player's collected clues
 */
const InventoryPanel = ({
  clues = [],
  onClueSelect,
  onAnalyzeClue,
  analyzedClues = [],
  className = '',
}) => {
  const [selectedClueId, setSelectedClueId] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get the currently selected clue
  const selectedClue = clues.find(clue => clue.id === selectedClueId);
  
  // Filter clues based on type and search query
  const filteredClues = clues.filter(clue => {
    // Apply type filter
    if (filterType !== 'all' && clue.type !== filterType) {
      return false;
    }
    
    // Apply search filter if query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return clue.name.toLowerCase().includes(query) || 
        (clue.description && clue.description.toLowerCase().includes(query));
    }
    
    return true;
  });
  
  // Check if a clue has been analyzed
  const isClueAnalyzed = (clueId) => analyzedClues.includes(clueId);
  
  // Handle clue selection
  const handleClueClick = (clue) => {
    setSelectedClueId(clue.id);
    if (onClueSelect) {
      onClueSelect(clue);
    }
  };
  
  // Handle clue analysis
  const handleAnalyzeClue = () => {
    if (selectedClue && !isClueAnalyzed(selectedClue.id) && onAnalyzeClue) {
      onAnalyzeClue(selectedClue);
    }
  };

  return (
    <div className={`inventory-panel bg-white rounded-lg shadow-lg flex flex-col ${className}`}>
      {/* Panel Header */}
      <div className="bg-amber-700 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Inventário de Pistas</h2>
        <p className="text-sm opacity-80">
          {clues.length} pista{clues.length !== 1 ? 's' : ''} coletada{clues.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="p-4 bg-gray-100 border-b">
        <div className="mb-3">
          <input 
            type="text" 
            placeholder="Buscar pistas..."
            className="w-full p-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={filterType === 'all' ? 'primary' : 'outline'}
            onClick={() => setFilterType('all')}
          >
            Todas
          </Button>
          <Button
            size="sm" 
            variant={filterType === 'physical' ? 'primary' : 'outline'}
            onClick={() => setFilterType('physical')}
          >
            Físicas
          </Button>
          <Button
            size="sm" 
            variant={filterType === 'document' ? 'primary' : 'outline'}
            onClick={() => setFilterType('document')}
          >
            Documentos
          </Button>
          <Button
            size="sm" 
            variant={filterType === 'testimonial' ? 'primary' : 'outline'}
            onClick={() => setFilterType('testimonial')}
          >
            Depoimentos
          </Button>
          <Button
            size="sm" 
            variant={filterType === 'digital' ? 'primary' : 'outline'}
            onClick={() => setFilterType('digital')}
          >
            Digitais
          </Button>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Clues List */}
        <div className="w-1/3 overflow-y-auto border-r">
          <div className="p-2">
            {filteredClues.length > 0 ? (
              filteredClues.map(clue => (
                <div 
                  key={clue.id}
                  className={`
                    p-2 mb-1 rounded cursor-pointer
                    ${selectedClueId === clue.id ? 'bg-amber-100 border border-amber-300' : 'hover:bg-gray-100'}
                    ${isClueAnalyzed(clue.id) ? 'border-l-4 border-l-green-500' : ''}
                  `}
                  onClick={() => handleClueClick(clue)}
                >
                  <div className="flex items-center gap-2">
                    {/* Clue type icon */}
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center
                      ${clue.type === 'physical' ? 'bg-amber-100 text-amber-700' : ''}
                      ${clue.type === 'document' ? 'bg-blue-100 text-blue-700' : ''}
                      ${clue.type === 'testimonial' ? 'bg-green-100 text-green-700' : ''}
                      ${clue.type === 'digital' ? 'bg-purple-100 text-purple-700' : ''}
                      ${clue.type === 'data' ? 'bg-indigo-100 text-indigo-700' : ''}
                    `}>
                      {clue.type === 'physical' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      )}
                      {clue.type === 'document' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {clue.type === 'testimonial' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      )}
                      {clue.type === 'digital' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {clue.type === 'data' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{clue.name}</div>
                      <div className="text-xs text-gray-500 truncate">{clue.description}</div>
                    </div>
                    
                    {isClueAnalyzed(clue.id) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                {clues.length === 0
                  ? 'Nenhuma pista coletada ainda.'
                  : 'Nenhuma pista corresponde aos filtros.'}
              </div>
            )}
          </div>
        </div>
        
        {/* Clue Details */}
        <div className="w-2/3 overflow-y-auto p-4">
          {selectedClue ? (
            <div className="animate-fadeIn">
              {/* Clue Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${selectedClue.type === 'physical' ? 'bg-amber-100 text-amber-700 border border-amber-300' : ''}
                  ${selectedClue.type === 'document' ? 'bg-blue-100 text-blue-700 border border-blue-300' : ''}
                  ${selectedClue.type === 'testimonial' ? 'bg-green-100 text-green-700 border border-green-300' : ''}
                  ${selectedClue.type === 'digital' ? 'bg-purple-100 text-purple-700 border border-purple-300' : ''}
                  ${selectedClue.type === 'data' ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : ''}
                `}>
                  {/* Icons same as above, but larger */}
                  {selectedClue.type === 'physical' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                  {selectedClue.type === 'document' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {selectedClue.type === 'testimonial' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )}
                  {selectedClue.type === 'digital' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {selectedClue.type === 'data' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{selectedClue.name}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedClue.type === 'physical' && 'Pista Física'}
                    {selectedClue.type === 'document' && 'Documento'}
                    {selectedClue.type === 'testimonial' && 'Testemunho'}
                    {selectedClue.type === 'digital' && 'Evidência Digital'}
                    {selectedClue.type === 'data' && 'Dados Analíticos'}
                  </p>
                </div>
              </div>
              
              {/* Clue Image */}
              {selectedClue.image && (
                <div className="mb-4">
                  <img 
                    src={selectedClue.image} 
                    alt={selectedClue.name} 
                    className="w-full max-h-48 object-cover object-center rounded-lg"
                  />
                </div>
              )}
              
              {/* Description */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">Descrição</h4>
                <p className="text-sm text-gray-600">{selectedClue.description}</p>
              </div>
              
              {/* Content */}
              {selectedClue.content && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Conteúdo</h4>
                  <div className="bg-gray-50 p-3 rounded border text-sm">{selectedClue.content}</div>
                </div>
              )}
              
              {/* Related SDGs if analyzed */}
              {isClueAnalyzed(selectedClue.id) && selectedClue.relatedSDGs && selectedClue.relatedSDGs.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">ODS Relacionados</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedClue.relatedSDGs.map(sdgId => (
                      <div 
                        key={sdgId}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        ODS {sdgId}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Analyze button - only if not already analyzed */}
              {!isClueAnalyzed(selectedClue.id) && (
                <div className="mt-6">
                  <Button 
                    variant="primary"
                    fullWidth
                    onClick={handleAnalyzeClue}
                  >
                    Analisar Pista
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Selecione uma pista para ver detalhes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

InventoryPanel.propTypes = {
  clues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.oneOf(['physical', 'document', 'testimonial', 'digital', 'data']).isRequired,
    content: PropTypes.string,
    image: PropTypes.string,
    relatedSDGs: PropTypes.arrayOf(PropTypes.number),
  })),
  onClueSelect: PropTypes.func,
  onAnalyzeClue: PropTypes.func,
  analyzedClues: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default InventoryPanel;