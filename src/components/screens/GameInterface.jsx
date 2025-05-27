import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameContext as useGame } from '../../context/GameContext';

// Import components
import Button from '../ui/Button';
import Dialog from '../ui/Dialog';
import InventoryPanel from '../ui/InventoryPanel';
import SDGDatabase from '../ui/SDGDatabase';
import Location from '../game/Location';
import Character from '../game/Character';
import ClueComponent from '../game/Clue';

// Import services
import { getCluesByLocation } from '../../data/clues';
import { characters } from '../../data/characters';
import { getCaseById } from '../../data/cases';
import sdgs from '../../data/sdgs'; // Import the SDGs data

const GameInterface = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const { 
    currentCase,
    currentLocation,
    collectedClues,
    knownSDGs,
    currentDialog: currentDialogue,
    changeLocation,
    collectClue,
    analyzeClue,
    setDialog: startDialogue,
    clearDialog: endDialogue,
    completeObjective
  } = useGame();
  
  // State
  const [showInventory, setShowInventory] = useState(false);
  const [showSDGDatabase, setShowSDGDatabase] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [showClueDetail, setShowClueDetail] = useState(null);
  const [showAnalysisResult, setShowAnalysisResult] = useState(null);
  
  // Get case data from the ID if currentCase is not set
  const caseData = currentCase || getCaseById(caseId);
  
  // Check if we have a valid case
  useEffect(() => {
    if (!caseData) {
      navigate('/cases');
    }
  }, [caseData, navigate]);

  // Get characters at current location
  const getCharactersAtLocation = () => {
    if (!currentLocation) return [];
    
    return characters.filter(character => 
      character.location === currentLocation
    );
  };

  // Get clues available at current location
  const getCluesAtLocation = () => {
    if (!currentLocation) return [];
    
    const locationClues = getCluesByLocation(currentLocation);
    const notCollectedClues = locationClues.filter(
      clue => !collectedClues.some(c => c.id === clue.id)
    );
    
    return notCollectedClues;
  };

  // Handle collecting a clue
  const handleCollectClue = (clue) => {
    collectClue(clue);
    // Check if this clue completes an objective
    if (caseData && caseData.objectives && 
        caseData.objectives.some(obj => obj.requiredClues && obj.requiredClues.includes(clue.id))) {
      completeObjective(`Coletar ${clue.name}`);
    }
  };

  // Handle character interaction
  const handleCharacterInteraction = (character) => {
    // Start dialogue with character's initial dialogue node
    if (character.dialogTree) {
      startDialogue({
        characterId: character.id,
        currentNodeId: character.dialogTree.id
      });
    } else {
      // If character doesn't have a dialogue tree, show a simple message
      startDialogue({
        characterId: character.id,
        currentNodeId: 'simple-greeting'
      });
    }
  };

  // Handle player choice in dialogue
  const handleDialogueChoice = (choice) => {
    if (!currentDialogue) return;
    
    const updatedDialogue = {
      ...currentDialogue,
      currentNodeId: choice.nextNodeId
    };
    
    startDialogue(updatedDialogue);
    
    if (choice.revealedClueId) {
      // TODO: Handle revealing clues through dialogue
    }
  };

  // Get current dialogue content
  const getCurrentDialogueContent = () => {
    if (!currentDialogue) return null;
    
    const character = characters.find(c => c.id === currentDialogue.characterId);
    if (!character) return null;
    
    // Find the current dialogue node
    let currentNode;
    
    if (character.dialogTree && character.dialogTree.id === currentDialogue.currentNodeId) {
      currentNode = character.dialogTree;
    } else if (character.dialogueTree?.children) {
      currentNode = character.dialogueTree.children.find(node => node.id === currentDialogue.currentNodeId);
    }
    
    if (!currentNode) return null;
    
    return {
      character,
      message: currentNode.text,
      choices: currentNode.choices || []
    };
  };

  // Handle location change
  const handleChangeLocation = (locationId) => {
    changeLocation(locationId);
  };

  // Handle clue analysis
  const handleAnalyzeClue = (clue) => {
    analyzeClue(clue.id);
    setShowAnalysisResult(clue);
  };

  // Get available locations to navigate to
  const getAvailableLocations = () => {
    if (!caseData) return [];
    return caseData.locations.filter(loc => loc.id !== currentLocation);
  };
  
  // Get game objectives
  const getObjectives = () => {
    if (!caseData || !caseData.objectives) return [];
    return caseData.objectives.map(obj => obj.description);
  };

  // Determine if we have notifications to show
  const notifications = [];  // This would be populated from the game state

  return (
    <div className="game-interface min-h-screen bg-gray-100 flex flex-col">
      {/* Top navigation bar */}
      <div className="bg-white shadow-md p-3 flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="neutral" 
            size="sm" 
            onClick={() => navigate('/cases')}
            className="mr-2"
          >
            Sair
          </Button>
          <h1 className="text-xl font-bold text-emerald-700">{caseData?.title || 'Investigação'}</h1>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant={showObjectives ? 'primary' : 'neutral'}
            size="sm" 
            onClick={() => setShowObjectives(!showObjectives)}
          >
            Objetivos
          </Button>
          <Button 
            variant={showInventory ? 'primary' : 'neutral'}
            size="sm" 
            onClick={() => {
              setShowInventory(!showInventory);
              if (showSDGDatabase) setShowSDGDatabase(false);
            }}
          >
            Inventário
          </Button>
          <Button 
            variant={showSDGDatabase ? 'primary' : 'neutral'}
            size="sm" 
            onClick={() => {
              setShowSDGDatabase(!showSDGDatabase);
              if (showInventory) setShowInventory(false);
            }}
          >
            ODS
          </Button>
          <Button 
            variant="outline"
            size="sm" 
            onClick={() => navigate(`/investigation/${caseId}`)}
          >
            Mapa de Investigação
          </Button>
        </div>
      </div>

      {/* Main game content area */}
      <div className="flex-grow flex">
        {/* Main game view */}
        <div className="flex-grow relative">
          {currentLocation && (
            <Location
              location={{ id: currentLocation, name: "Current Location" }}
              onNavigate={handleChangeLocation}
            >
              {/* Characters at this location */}
              {getCharactersAtLocation().map(character => (
                <Character
                  key={character.id}
                  character={character}
                  onClick={() => handleCharacterInteraction(character)}
                />
              ))}
              
              {/* Clues at this location */}
              {getCluesAtLocation().map(clue => (
                <ClueComponent
                  key={clue.id}
                  clue={clue}
                  onClick={() => handleCollectClue(clue)}
                />
              ))}
            </Location>
          )}
          
          {/* Navigation options */}
          {currentLocation && (
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-3">
              <h3 className="font-semibold mb-2">Navegar para:</h3>
              <div className="flex flex-wrap gap-2">
                {getAvailableLocations().map(location => (
                  <Button
                    key={location.id}
                    variant="outline"
                    size="sm"
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-white/30"
                    onClick={() => handleChangeLocation(location.id)}
                  >
                    {location.name}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Side panels */}
        {showInventory && (
          <div className="w-80 bg-white shadow-lg h-full animate-slideInUp">
            <InventoryPanel 
              onSelectClue={(clue) => setShowClueDetail(clue)} 
              onAnalyzeClue={handleAnalyzeClue}
            />
          </div>
        )}
        
        {showSDGDatabase && (
          <div className="w-80 bg-white shadow-lg h-full animate-slideInUp">
            <SDGDatabase 
              allSDGs={sdgs} // Pass the imported sdgs array here
              knownSDGs={knownSDGs}
              onClose={() => setShowSDGDatabase(false)}
            />
          </div>
        )}
      </div>

      {/* Objectives panel */}
      {showObjectives && (
        <div className="absolute top-16 right-4 w-72 bg-white rounded-md shadow-lg p-4 animate-fadeIn">
          <h3 className="font-bold text-emerald-700 mb-2">Objetivos Atuais:</h3>
          {getObjectives().length > 0 ? (
            <ul className="list-disc pl-5">
              {getObjectives().map((objective, index) => (
                <li key={index} className="mb-1">{objective}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">Todos os objetivos foram concluídos!</p>
          )}
        </div>
      )}
      
      {/* Current dialogue */}
      {currentDialogue && getCurrentDialogueContent() && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
          <Dialog 
            character={getCurrentDialogueContent().character}
            message={getCurrentDialogueContent().message}
            choices={getCurrentDialogueContent().choices}
            onChoiceSelected={handleDialogueChoice}
            onClose={getCurrentDialogueContent().choices.length === 0 ? endDialogue : null}
            showCloseButton={getCurrentDialogueContent().choices.length === 0}
          />
        </div>
      )}
      
      {/* Clue detail modal */}
      {showClueDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 animate-fadeIn">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-emerald-700">{showClueDetail.name}</h2>
              <Button 
                variant="neutral" 
                size="sm"
                onClick={() => setShowClueDetail(null)}
              >
                Fechar
              </Button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700">{showClueDetail.description}</p>
            </div>
            
            {showClueDetail.image && (
              <div className="mb-4">
                <img 
                  src={showClueDetail.image} 
                  alt={showClueDetail.name}
                  className="max-w-full h-auto rounded-md"
                />
              </div>
            )}
            
            {showClueDetail.content && (
              <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
                <h3 className="font-semibold mb-1">{showClueDetail.title || 'Conteúdo'}</h3>
                <p className="text-gray-700">{showClueDetail.content}</p>
              </div>
            )}
            
            {showClueDetail.relatedSDGs && showClueDetail.relatedSDGs.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">ODS Relacionados:</h3>
                <div className="flex flex-wrap gap-1">
                  {showClueDetail.relatedSDGs.map(sdgId => (
                    <span 
                      key={sdgId}
                      className={`sdg-tag sdg-${sdgId} text-white`}
                    >
                      ODS {sdgId}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {collectedClues.some(c => c.id === showClueDetail.id && c.analysis) && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-md">
                <h3 className="font-semibold text-emerald-700 mb-2">Análise da Pista:</h3>
                <ul className="list-disc pl-5">
                  {showClueDetail.analysis && showClueDetail.analysis.findings && 
                   showClueDetail.analysis.findings.map((finding, idx) => (
                    <li key={idx} className="mb-1 text-gray-800">{finding}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {!collectedClues.some(c => c.id === showClueDetail.id && c.analysis) && (
              <div className="mt-4 text-right">
                <Button 
                  onClick={() => {
                    handleAnalyzeClue(showClueDetail);
                    setShowClueDetail(null);
                  }}
                >
                  Analisar Pista
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Analysis result modal */}
      {showAnalysisResult && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Análise Concluída</h2>
            
            <p className="mb-4 text-gray-700">
              A análise da pista <strong>{showAnalysisResult.name}</strong> revelou informações importantes.
            </p>
            
            {showAnalysisResult.relatedSDGs && showAnalysisResult.relatedSDGs.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">ODS Relacionados Descobertos:</h3>
                <div className="flex flex-wrap gap-2">
                  {showAnalysisResult.relatedSDGs.map(sdgId => (
                    <div 
                      key={sdgId}
                      className="flex items-center p-2 bg-gray-100 rounded-md"
                    >
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white font-bold mr-2 sdg-${sdgId}`}>
                        {sdgId}
                      </div>
                      <span>ODS {sdgId}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Conclusões da Análise:</h3>
              <ul className="list-disc pl-5">
                {showAnalysisResult.analysis && showAnalysisResult.analysis.findings && 
                 showAnalysisResult.analysis.findings.map((finding, idx) => (
                  <li key={idx} className="mb-2 text-gray-800">{finding}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={() => setShowAnalysisResult(null)}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Notifications */}
      <div className="absolute top-20 left-4 flex flex-col space-y-2 max-w-xs">
        {notifications.slice(-3).map((notification, index) => (
          <div 
            key={index}
            className={`
              px-4 py-2 rounded-md shadow-md animate-fadeIn
              ${notification.type === 'clue' ? 'bg-amber-100 text-amber-800 border-l-4 border-amber-500' : ''}
              ${notification.type === 'objective' ? 'bg-green-100 text-green-800 border-l-4 border-green-500' : ''}
              ${notification.type === 'info' ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-500' : ''}
              ${notification.type === 'location' ? 'bg-indigo-100 text-indigo-800 border-l-4 border-indigo-500' : ''}
            `}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameInterface;