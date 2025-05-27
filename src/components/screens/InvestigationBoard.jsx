import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameContext as useGame } from '../../context/GameContext';
import Button from '../ui/Button';

const InvestigationBoard = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const { 
    state, 
    getCurrentCase, 
    getCollectedClues,
    getKnownSDGsDetails,
    createConnection,
    completeCase
  } = useGame();
  
  const boardRef = useRef(null);
  const [draggingItem, setDraggingItem] = useState(null);
  const [items, setItems] = useState([]);
  const [connections, setConnections] = useState([]);
  const [connecting, setConnecting] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [connectionForm, setConnectionForm] = useState({ description: '', type: 'causal' });
  const [isReady, setIsReady] = useState(false);
  const [showCaseCompletion, setShowCaseCompletion] = useState(false);
  const [positionOffset, setPositionOffset] = useState({ x: 0, y: 0 });
  
  const currentCase = getCurrentCase();
  const collectedClues = getCollectedClues();
  const knownSDGs = getKnownSDGsDetails();
  const gameConnections = state.gameState.connections;
  
  // Initialize board items from collected clues and known SDGs
  useEffect(() => {
    if (collectedClues.length === 0 && knownSDGs.length === 0) {
      return;
    }

    const initialItems = [
      ...collectedClues.map((clue, index) => ({
        id: clue.id,
        type: 'clue',
        data: clue,
        position: {
          x: 100 + (index % 3) * 220,
          y: 100 + Math.floor(index / 3) * 120,
        }
      })),
      ...knownSDGs.map((sdg, index) => ({
        id: `sdg-${sdg.id}`,
        type: 'sdg',
        data: sdg,
        position: {
          x: 620 + (index % 2) * 220,
          y: 100 + Math.floor(index / 2) * 120,
        }
      }))
    ];
    
    setItems(initialItems);
    setIsReady(true);
  }, [collectedClues, knownSDGs]);
  
  // Set connections from the game state
  useEffect(() => {
    if (gameConnections.length === 0) return;
    
    const formattedConnections = gameConnections.map(conn => ({
      id: conn.id,
      source: conn.sourceId,
      target: conn.targetId,
      type: conn.type || 'causal',
      description: conn.description || '',
    }));
    
    setConnections(formattedConnections);
  }, [gameConnections]);
  
  // Check if case can be completed
  useEffect(() => {
    if (!currentCase || !isReady) return;
    
    // For basic completion, check if player has made at least X connections
    // and if all required SDGs for this case have been connected to clues
    const requiredSdgs = currentCase.relatedSDGs || [];
    const connectedSdgs = new Set();
    
    gameConnections.forEach(conn => {
      // Check if this connection involves an SDG
      if (conn.sourceId.startsWith('sdg-') || conn.targetId.startsWith('sdg-')) {
        // Extract the SDG ID
        const sdgId = conn.sourceId.startsWith('sdg-') 
          ? parseInt(conn.sourceId.replace('sdg-', ''))
          : parseInt(conn.targetId.replace('sdg-', ''));
        
        connectedSdgs.add(sdgId);
      }
    });
    
    // Check if all required SDGs are connected
    const hasAllRequiredConnections = requiredSdgs.every(sdg => connectedSdgs.has(sdg));
    const hasMinimumConnections = gameConnections.length >= (currentCase.minConnections || 3);
    
    if (hasAllRequiredConnections && hasMinimumConnections && state.gameState.objectives.length === 0) {
      setShowCaseCompletion(true);
    }
  }, [currentCase, isReady, gameConnections, state.gameState.objectives]);
  
  // Handle item dragging
  const handleMouseDown = (e, item) => {
    if (!boardRef.current) return;
    
    const boardRect = boardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - boardRect.left - item.position.x;
    const offsetY = e.clientY - boardRect.top - item.position.y;
    
    setDraggingItem(item);
    setPositionOffset({ x: offsetX, y: offsetY });
  };
  
  const handleMouseMove = (e) => {
    if (!draggingItem || !boardRef.current) return;
    
    const boardRect = boardRef.current.getBoundingClientRect();
    const x = e.clientX - boardRect.left - positionOffset.x;
    const y = e.clientY - boardRect.top - positionOffset.y;
    
    const updatedItems = items.map(item => 
      item.id === draggingItem.id 
        ? { ...item, position: { x, y } } 
        : item
    );
    
    setItems(updatedItems);
  };
  
  const handleMouseUp = () => {
    setDraggingItem(null);
  };
  
  // Handle connection creation
  const handleStartConnection = (item) => {
    setConnecting(item);
  };
  
  const handleCompleteConnection = (item) => {
    if (!connecting || connecting.id === item.id) {
      setConnecting(null);
      return;
    }
    
    // Check if connection already exists
    const connectionExists = connections.some(
      conn => (
        (conn.source === connecting.id && conn.target === item.id) ||
        (conn.source === item.id && conn.target === connecting.id)
      )
    );
    
    if (!connectionExists) {
      const newConnection = {
        id: `${connecting.id}-${item.id}`,
        source: connecting.id,
        target: item.id,
        type: 'default',
        description: '',
      };
      
      setConnections([...connections, newConnection]);
      setSelectedConnection(newConnection);
    }
    
    setConnecting(null);
  };
  
  // Handle form submission for connection details
  const handleConnectionSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedConnection) return;
    
    // Update local state
    const updatedConnections = connections.map(conn => 
      conn.id === selectedConnection.id
        ? { ...conn, ...connectionForm }
        : conn
    );
    
    // Save to game context
    createConnection(
      selectedConnection.source,
      selectedConnection.target,
      connectionForm.type,
      connectionForm.description
    );
    
    setConnections(updatedConnections);
    setSelectedConnection(null);
    setConnectionForm({ description: '', type: 'causal' });
  };
  
  // Handle case completion
  const handleCompleteCase = () => {
    // Calculate a score based on the quality of connections
    const score = Math.min(100, gameConnections.length * 10);
    completeCase(score);
    navigate('/cases');
  };
  
  // Find item's position
  const getItemPosition = (itemId) => {
    const item = items.find(i => i.id === itemId);
    return item ? item.position : { x: 0, y: 0 };
  };
  
  // Connection drawing helpers
  const createConnectionPath = (conn) => {
    const sourcePos = getItemPosition(conn.source);
    const targetPos = getItemPosition(conn.target);
    
    if (!sourcePos || !targetPos) return '';
    
    // Add small offsets to center connections on items
    const sourceX = sourcePos.x + 80;
    const sourceY = sourcePos.y + 30;
    const targetX = targetPos.x + 80;
    const targetY = targetPos.y + 30;
    
    return `M${sourceX},${sourceY} C${(sourceX + targetX) / 2},${sourceY} ${(sourceX + targetX) / 2},${targetY} ${targetX},${targetY}`;
  };
  
  // Render item on the board
  const renderBoardItem = (item) => {
    const isClue = item.type === 'clue';
    const isSDG = item.type === 'sdg';
    const isConnecting = connecting && connecting.id === item.id;
    const isPotentialTarget = connecting && connecting.id !== item.id;
    
    return (
      <div
        key={item.id}
        className={`
          absolute p-3 w-64 rounded-md shadow-md cursor-move select-none
          ${isClue ? 'bg-white border-l-4 border-amber-500' : ''}
          ${isSDG ? 'bg-white border-l-4 border-blue-500' : ''}
          ${isConnecting ? 'ring-2 ring-emerald-500' : ''}
          ${isPotentialTarget ? 'hover:ring-2 hover:ring-emerald-300' : ''}
        `}
        style={{
          left: item.position.x,
          top: item.position.y,
          transform: isConnecting ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseDown={(e) => handleMouseDown(e, item)}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm">
            {isClue ? item.data.name : `ODS ${item.data.id}: ${item.data.shortName}`}
          </h3>
          
          <div className="flex space-x-1">
            <button
              className={`w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 ${isConnecting ? 'bg-green-500 text-white' : ''}`}
              onClick={() => isConnecting ? handleCompleteConnection(item) : handleStartConnection(item)}
              title={isConnecting ? "Completar conexão" : "Iniciar conexão"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <p className="text-xs text-gray-600 line-clamp-3 mt-1">
          {isClue ? item.data.description : item.data.description}
        </p>
        
        {isClue && item.data.relatedSDGs && (
          <div className="flex flex-wrap gap-1 mt-1">
            {item.data.relatedSDGs.map(sdgId => (
              <span key={sdgId} className={`sdg-tag sdg-${sdgId} text-white text-xs`}>
                ODS {sdgId}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!currentCase) {
    return <div className="flex items-center justify-center h-screen">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-emerald-700">Mapa de Investigação: {currentCase.title}</h1>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate(`/play/${caseId}`)}
            >
              Voltar à Investigação
            </Button>
            
            <Button 
              variant="neutral" 
              onClick={() => navigate('/cases')}
            >
              Sair do Caso
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Como usar o Mapa de Investigação</h2>
          <p className="text-gray-700 mb-4">
            Conecte pistas e ODS para resolver o caso. Arraste os itens para organizá-los e clique no ícone de conexão para estabelecer relações entre eles.
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
              <span className="text-sm">Pistas</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm">ODS</span>
            </div>
          </div>
        </div>
        
        <div 
          ref={boardRef}
          className="relative w-full h-[600px] bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map(conn => (
              <g key={conn.id}>
                <path
                  d={createConnectionPath(conn)}
                  fill="none"
                  className={`connection-line ${selectedConnection?.id === conn.id ? 'highlighted' : ''}`}
                />
                {/* Connection label */}
                {conn.description && (
                  <text
                    x={(getItemPosition(conn.source).x + getItemPosition(conn.target).x) / 2 + 80}
                    y={(getItemPosition(conn.source).y + getItemPosition(conn.target).y) / 2 + 30}
                    textAnchor="middle"
                    className="fill-gray-600 text-xs bg-white"
                    onClick={() => setSelectedConnection(conn)}
                  >
                    <tspan dx="0" dy="0" className="bg-white px-1 py-0.5 rounded">
                      {conn.description.substring(0, 20)}{conn.description.length > 20 ? '...' : ''}
                    </tspan>
                  </text>
                )}
              </g>
            ))}
          </svg>
          
          {/* Board items */}
          {items.map(item => renderBoardItem(item))}
          
          {/* Connection instruction when making a connection */}
          {connecting && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-4 py-2 rounded-md">
              Selecione um item para conectar ou <button onClick={() => setConnecting(null)} className="underline">cancelar</button>
            </div>
          )}
        </div>
        
        {/* Connection detail form */}
        {selectedConnection && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-emerald-700 mb-4">Detalhes da Conexão</h2>
              
              <form onSubmit={handleConnectionSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Tipo de Conexão</label>
                  <select
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={connectionForm.type}
                    onChange={e => setConnectionForm({...connectionForm, type: e.target.value})}
                  >
                    <option value="causal">Causa e Efeito</option>
                    <option value="correlation">Correlação</option>
                    <option value="solution">Solução</option>
                    <option value="impact">Impacto</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Descrição</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={connectionForm.description}
                    onChange={e => setConnectionForm({...connectionForm, description: e.target.value})}
                    placeholder="Descreva como estes itens estão relacionados..."
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button 
                    type="button"
                    variant="neutral"
                    onClick={() => setSelectedConnection(null)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Case completion dialog */}
        {showCaseCompletion && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-emerald-700 mb-2">Caso Resolvido!</h2>
              <p className="text-gray-700 mb-4">
                Parabéns! Você estabeleceu conexões suficientes para compreender este caso e identificou todos os ODS relevantes.
              </p>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-md p-4 mb-4">
                <h3 className="font-semibold text-emerald-700 mb-2">Conclusões:</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Você identificou {gameConnections.length} conexões entre pistas e ODS.</li>
                  <li className="mb-1">Todos os Objetivos de Desenvolvimento Sustentável relevantes foram aplicados ao caso.</li>
                  <li className="mb-1">Suas análises mostram uma compreensão clara dos desafios de sustentabilidade presentes.</li>
                </ul>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleCompleteCase}>
                  Concluir Caso
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestigationBoard;