import React, { createContext, useContext, useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import sdgs from '../data/sdgs';
import clues from '../data/clues';
import characters from '../data/characters';

// Create the Game Context
const GameContext = createContext();

// Initial state for the game
const initialState = {
  // Player info
  playerName: '',
  avatar: '',
  
  // Progress tracking
  currentCase: null,
  completedCases: [],
  currentLocation: null,
  visitedLocations: [],
  
  // Inventory and discoveries
  collectedClues: [],
  analyzedClues: [],
  knownSDGs: [],
  interactedCharacters: [],
  completedObjectives: [],
  
  // Game state
  gameStarted: false,
  tutorialCompleted: false,
  currentDialog: null,
  
  // Game settings
  difficulty: 'normal',
  soundEnabled: true,
  musicEnabled: true,
};

// Action types for reducer
const actionTypes = {
  START_GAME: 'START_GAME',
  COMPLETE_TUTORIAL: 'COMPLETE_TUTORIAL',
  SET_PLAYER: 'SET_PLAYER',
  SELECT_CASE: 'SELECT_CASE',
  COMPLETE_CASE: 'COMPLETE_CASE',
  CHANGE_LOCATION: 'CHANGE_LOCATION',
  COLLECT_CLUE: 'COLLECT_CLUE',
  ANALYZE_CLUE: 'ANALYZE_CLUE',
  DISCOVER_SDG: 'DISCOVER_SDG',
  INTERACT_WITH_CHARACTER: 'INTERACT_WITH_CHARACTER',
  SET_DIALOG: 'SET_DIALOG',
  COMPLETE_OBJECTIVE: 'COMPLETE_OBJECTIVE',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  LOAD_GAME: 'LOAD_GAME',
  RESET_GAME: 'RESET_GAME',
};

// Reducer function to handle state changes
function gameReducer(state, action) {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        gameStarted: true,
      };
      
    case actionTypes.COMPLETE_TUTORIAL:
      return {
        ...state,
        tutorialCompleted: true,
      };
      
    case actionTypes.SET_PLAYER:
      return {
        ...state,
        playerName: action.payload.name,
        avatar: action.payload.avatar,
      };
      
    case actionTypes.SELECT_CASE:
      return {
        ...state,
        currentCase: action.payload,
        currentLocation: null,
        currentDialog: null,
      };
      
    case actionTypes.COMPLETE_CASE:
      return {
        ...state,
        completedCases: [...state.completedCases, action.payload],
        currentCase: null,
      };
      
    case actionTypes.CHANGE_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
        visitedLocations: state.visitedLocations.includes(action.payload)
          ? state.visitedLocations
          : [...state.visitedLocations, action.payload],
      };
      
    case actionTypes.COLLECT_CLUE:
      // Only add the clue if it's not already collected
      if (state.collectedClues.some(clue => clue.id === action.payload.id)) {
        return state;
      }
      
      return {
        ...state,
        collectedClues: [...state.collectedClues, action.payload],
      };
      
    case actionTypes.ANALYZE_CLUE:
      // Only add to analyzed if not already analyzed
      if (state.analyzedClues.includes(action.payload)) {
        return state;
      }
      
      const analyzeClue = clues.find(clue => clue.id === action.payload);
      let updatedKnownSDGs = [...state.knownSDGs];
      
      // If the clue has related SDGs, discover them
      if (analyzeClue && analyzeClue.relatedSDGs) {
        analyzeClue.relatedSDGs.forEach(sdgId => {
          if (!updatedKnownSDGs.includes(sdgId)) {
            updatedKnownSDGs.push(sdgId);
          }
        });
      }
      
      return {
        ...state,
        analyzedClues: [...state.analyzedClues, action.payload],
        knownSDGs: updatedKnownSDGs,
      };
      
    case actionTypes.DISCOVER_SDG:
      // Only discover if not already known
      if (state.knownSDGs.includes(action.payload)) {
        return state;
      }
      
      return {
        ...state,
        knownSDGs: [...state.knownSDGs, action.payload],
      };
      
    case actionTypes.INTERACT_WITH_CHARACTER:
      return {
        ...state,
        interactedCharacters: state.interactedCharacters.includes(action.payload) 
          ? state.interactedCharacters 
          : [...state.interactedCharacters, action.payload],
      };
      
    case actionTypes.SET_DIALOG:
      return {
        ...state,
        currentDialog: action.payload,
      };
      
    case actionTypes.COMPLETE_OBJECTIVE:
      return {
        ...state,
        completedObjectives: state.completedObjectives.includes(action.payload)
          ? state.completedObjectives
          : [...state.completedObjectives, action.payload],
      };
      
    case actionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
      
    case actionTypes.LOAD_GAME:
      return {
        ...action.payload,
      };
      
    case actionTypes.RESET_GAME:
      return {
        ...initialState,
      };
      
    default:
      return state;
  }
}

// Provider component
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if there's a saved game on mount
  useEffect(() => {
    const loadSavedGame = () => {
      try {
        const savedGame = localStorage.getItem('misteriodoFuturoSustentavel');
        
        if (savedGame) {
          const gameData = JSON.parse(savedGame);
          dispatch({ type: actionTypes.LOAD_GAME, payload: gameData });
        }
      } catch (error) {
        console.error('Error loading saved game:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSavedGame();
  }, []);
  
  // Save game state to localStorage when it changes
  useEffect(() => {
    // Don't save if we're still loading
    if (isLoading) return;
    
    try {
      localStorage.setItem('misteriodoFuturoSustentavel', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving game:', error);
    }
  }, [state, isLoading]);
  
  // Game action functions
  const startGame = () => {
    dispatch({ type: actionTypes.START_GAME });
  };
  
  const completeTutorial = () => {
    dispatch({ type: actionTypes.COMPLETE_TUTORIAL });
  };
  
  const setPlayer = (name, avatar) => {
    dispatch({ 
      type: actionTypes.SET_PLAYER, 
      payload: { name, avatar } 
    });
  };
  
  const selectCase = (caseData) => {
    dispatch({
      type: actionTypes.SELECT_CASE,
      payload: caseData,
    });
  };
  
  const completeCase = (caseId) => {
    dispatch({
      type: actionTypes.COMPLETE_CASE,
      payload: caseId,
    });
  };
  
  const changeLocation = (locationId) => {
    dispatch({
      type: actionTypes.CHANGE_LOCATION,
      payload: locationId,
    });
  };
  
  const collectClue = (clueData) => {
    dispatch({
      type: actionTypes.COLLECT_CLUE,
      payload: clueData,
    });
  };
  
  const analyzeClue = (clueId) => {
    dispatch({
      type: actionTypes.ANALYZE_CLUE,
      payload: clueId,
    });
  };
  
  const discoverSDG = (sdgId) => {
    dispatch({
      type: actionTypes.DISCOVER_SDG,
      payload: sdgId,
    });
  };
  
  const interactWithCharacter = (characterId) => {
    dispatch({
      type: actionTypes.INTERACT_WITH_CHARACTER,
      payload: characterId,
    });
  };
  
  const setDialog = (dialogData) => {
    dispatch({
      type: actionTypes.SET_DIALOG,
      payload: dialogData,
    });
  };
  
  const clearDialog = () => {
    dispatch({
      type: actionTypes.SET_DIALOG,
      payload: null,
    });
  };
  
  const completeObjective = (objectiveId) => {
    dispatch({
      type: actionTypes.COMPLETE_OBJECTIVE,
      payload: objectiveId,
    });
  };
  
  const updateSettings = (settings) => {
    dispatch({
      type: actionTypes.UPDATE_SETTINGS,
      payload: settings,
    });
  };
  
  const resetGame = () => {
    dispatch({ type: actionTypes.RESET_GAME });
  };
  
  // Helper functions to get data
  const getCollectedClueById = (clueId) => {
    return state.collectedClues.find(clue => clue.id === clueId);
  };
  
  const getAllSDGs = () => {
    return sdgs;
  };
  
  const getKnownSDGs = () => {
    return sdgs.filter(sdg => state.knownSDGs.includes(sdg.id));
  };
  
  const getCaseProgress = (caseId) => {
    if (!state.currentCase || state.currentCase.id !== caseId) {
      return 0;
    }
    
    // Calculate progress based on collected clues and completed objectives
    const caseClues = clues.filter(clue => clue.id.startsWith(`clue-${caseId.split('-')[1]}`));
    const collectedCount = state.collectedClues.filter(clue => 
      clue.id.startsWith(`clue-${caseId.split('-')[1]}`)
    ).length;
    
    return Math.floor((collectedCount / caseClues.length) * 100);
  };
  
  const value = {
    // State
    ...state,
    isLoading,
    
    // Actions
    startGame,
    completeTutorial,
    setPlayer,
    selectCase,
    completeCase,
    changeLocation,
    collectClue,
    analyzeClue,
    discoverSDG,
    interactWithCharacter,
    setDialog,
    clearDialog,
    completeObjective,
    updateSettings,
    resetGame,
    
    // Helpers
    getCollectedClueById,
    getAllSDGs,
    getKnownSDGs,
    getCaseProgress,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

// Custom hook for using the game context
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameContext;