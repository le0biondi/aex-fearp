import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * SDGDatabase component for viewing and selecting SDGs (Sustainable Development Goals)
 */
const SDGDatabase = ({
  allSDGs,
  knownSDGs = [],
  onSelect,
  onClose,
  showUnknown = false,
  className = '',
}) => {
  const [activeSDG, setActiveSDG] = useState(null);
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'known', 'categories'
  const [searchQuery, setSearchQuery] = useState('');
  
  const visibleSDGs = allSDGs.filter(sdg => {
    // First apply filter mode
    if (filterMode === 'known' && !knownSDGs.includes(sdg.id)) {
      return false;
    }
    
    // Then apply search query if it exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = sdg.title.toLowerCase().includes(query);
      const matchesDesc = sdg.description.toLowerCase().includes(query);
      const matchesThemes = sdg.themes && sdg.themes.some(theme => theme.toLowerCase().includes(query));
      
      return matchesTitle || matchesDesc || matchesThemes;
    }
    
    return true;
  });

  // Set the first known SDG as active when component mounts
  useEffect(() => {
    if (knownSDGs.length > 0 && allSDGs.length > 0) {
      const firstKnown = allSDGs.find(sdg => knownSDGs.includes(sdg.id));
      if (firstKnown) {
        setActiveSDG(firstKnown);
      }
    }
  }, [knownSDGs, allSDGs]);

  const handleSDGClick = (sdg) => {
    setActiveSDG(sdg);
    if (onSelect) {
      onSelect(sdg);
    }
  };

  const isSDGKnown = (sdgId) => knownSDGs.includes(sdgId);

  return (
    <div className={`sdg-database bg-white rounded-lg shadow-lg flex flex-col ${className}`}>
      {/* Database Header */}
      <div className="bg-blue-700 text-white p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Base de Dados ODS</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-white hover:bg-blue-600"
          >
            Fechar
          </Button>
        </div>
        <p className="text-sm opacity-80">
          Explore os Objetivos de Desenvolvimento Sustentável da ONU
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="p-4 bg-gray-100 border-b">
        <div className="mb-3">
          <input 
            type="text" 
            placeholder="Buscar ODS por título, tema ou descrição..."
            className="w-full p-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={filterMode === 'all' ? 'primary' : 'outline'}
            onClick={() => setFilterMode('all')}
          >
            Todos
          </Button>
          <Button
            size="sm" 
            variant={filterMode === 'known' ? 'primary' : 'outline'}
            onClick={() => setFilterMode('known')}
          >
            Descobertos
          </Button>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* SDG List */}
        <div className="w-1/3 overflow-y-auto border-r">
          <div className="p-2">
            {visibleSDGs.map(sdg => (
              <div 
                key={sdg.id}
                className={`
                  p-2 mb-1 rounded cursor-pointer flex items-center gap-2
                  ${activeSDG?.id === sdg.id ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'}
                  ${!isSDGKnown(sdg.id) && !showUnknown ? 'opacity-60' : ''}
                `}
                onClick={() => handleSDGClick(sdg)}
              >
                {isSDGKnown(sdg.id) || showUnknown ? (
                  <>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: sdg.color || '#888888' }}
                    >
                      <span className="text-white font-bold">{sdg.id}</span>
                    </div>
                    <span className="font-medium text-sm line-clamp-1">{sdg.shortName}</span>
                  </>
                ) : (
                  <>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold">?</span>
                    </div>
                    <span className="font-medium text-sm">ODS {sdg.id}</span>
                  </>
                )}
              </div>
            ))}
            
            {visibleSDGs.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                Nenhum ODS encontrado com esses filtros.
              </div>
            )}
          </div>
        </div>
        
        {/* SDG Details */}
        <div className="w-2/3 overflow-y-auto p-4">
          {activeSDG && (isSDGKnown(activeSDG.id) || showUnknown) ? (
            <div className="animate-fadeIn">
              {/* SDG Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 shadow-md" style={{ borderColor: activeSDG.color }}>
                  {activeSDG.icon ? (
                    <img src={activeSDG.icon} alt={`ODS ${activeSDG.id}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: activeSDG.color }}>
                      <span className="text-white font-bold text-xl">{activeSDG.id}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{activeSDG.title}</h3>
                  <p className="text-sm text-gray-600">ODS {activeSDG.id}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">Descrição</h4>
                <p className="text-sm">{activeSDG.fullDescription || activeSDG.description}</p>
              </div>
              
              {/* Targets */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">Metas</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {activeSDG.targets && activeSDG.targets.map((target, index) => (
                    <li key={index} className="text-gray-700">{target}</li>
                  ))}
                </ul>
              </div>
              
              {/* Themes */}
              {activeSDG.themes && activeSDG.themes.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Temas Relacionados</h4>
                  <div className="flex flex-wrap gap-1">
                    {activeSDG.themes.map((theme, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Related SDGs */}
              {activeSDG.connections && activeSDG.connections.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">ODS Relacionados</h4>
                  <div className="flex flex-wrap gap-1">
                    {activeSDG.connections.map(connectedId => {
                      const connectedSDG = allSDGs.find(sdg => sdg.id === connectedId);
                      if (!connectedSDG) return null;
                      
                      const isConnectedKnown = isSDGKnown(connectedId) || showUnknown;
                      
                      return (
                        <div
                          key={connectedId}
                          className={`
                            w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
                            ${isConnectedKnown ? '' : 'bg-gray-300'}
                          `}
                          style={{ 
                            backgroundColor: isConnectedKnown ? connectedSDG.color : undefined,
                          }}
                          onClick={() => isConnectedKnown && handleSDGClick(connectedSDG)}
                        >
                          <span className={`font-bold ${isConnectedKnown ? 'text-white' : 'text-gray-600'}`}>
                            {isConnectedKnown ? connectedId : '?'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : activeSDG && !isSDGKnown(activeSDG.id) && !showUnknown ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-3xl font-bold">?</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ODS {activeSDG.id}</h3>
              <p className="text-gray-500 text-center max-w-sm">
                Você ainda não descobriu este Objetivo de Desenvolvimento Sustentável. Continue investigando para desbloquear mais informações.
              </p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Selecione um ODS para ver mais detalhes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SDGDatabase.propTypes = {
  allSDGs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullDescription: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    targets: PropTypes.arrayOf(PropTypes.string),
    connections: PropTypes.arrayOf(PropTypes.number),
    themes: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  knownSDGs: PropTypes.arrayOf(PropTypes.number),
  onSelect: PropTypes.func,
  onClose: PropTypes.func,
  showUnknown: PropTypes.bool,
  className: PropTypes.string,
};

export default SDGDatabase;