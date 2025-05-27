import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../ui/Dialog';

/**
 * DialogSystem component for managing dialogues with characters in the game
 */
const DialogSystem = ({
  character,
  dialogTree,
  onDialogueEnd,
  onClueReveal,
  onSDGReveal,
  onObjectiveComplete,
  className = '',
}) => {
  const [currentNode, setCurrentNode] = useState(null);
  const [dialogHistory, setDialogHistory] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [revealedClues, setRevealedClues] = useState([]);
  const [revealedSDGs, setRevealedSDGs] = useState([]);

  // Initialize dialogue when character and dialogTree are provided
  useEffect(() => {
    if (character && dialogTree) {
      setCurrentNode(dialogTree); // Start with the root node of the dialogue tree
      setIsActive(true);
      setDialogHistory([]);
      setRevealedClues([]);
      setRevealedSDGs([]);
    } else {
      setIsActive(false);
    }
  }, [character, dialogTree]);

  // Handle player choice selection
  const handleChoiceSelected = (choice) => {
    if (!choice || !choice.nextNodeId) {
      handleDialogueEnd();
      return;
    }

    // Find the next dialogue node
    const nextNode = findNodeById(choice.nextNodeId, dialogTree);
    if (!nextNode) {
      console.error(`Next node with id ${choice.nextNodeId} not found`);
      handleDialogueEnd();
      return;
    }

    // Add current dialogue to history
    setDialogHistory([
      ...dialogHistory,
      {
        characterId: character.id,
        message: currentNode.text,
        selectedChoice: choice
      }
    ]);

    // Check for any special triggers in the choice
    handleChoiceTriggers(choice);

    // Move to next node
    setCurrentNode(nextNode);
  };

  // Handle special triggers in the choice
  const handleChoiceTriggers = (choice) => {
    // Clue reveal trigger
    if (choice.revealClueId && !revealedClues.includes(choice.revealClueId)) {
      setRevealedClues([...revealedClues, choice.revealClueId]);
      if (onClueReveal) {
        onClueReveal(choice.revealClueId);
      }
    }

    // SDG reveal trigger
    if (choice.revealSDGId && !revealedSDGs.includes(choice.revealSDGId)) {
      setRevealedSDGs([...revealedSDGs, choice.revealSDGId]);
      if (onSDGReveal) {
        onSDGReveal(choice.revealSDGId);
      }
    }

    // Objective complete trigger
    if (choice.completeObjective && onObjectiveComplete) {
      onObjectiveComplete(choice.completeObjective);
    }
  };

  // Helper function to find a node by ID in the dialogue tree
  const findNodeById = (nodeId, tree) => {
    // If this is the node we're looking for
    if (tree.id === nodeId) {
      return tree;
    }
    
    // If this node has children, search them
    if (tree.children && tree.children.length > 0) {
      for (const child of tree.children) {
        const found = findNodeById(nodeId, child);
        if (found) return found;
      }
    }
    
    return null;
  };

  const handleDialogueEnd = () => {
    setIsActive(false);
    if (onDialogueEnd) {
      onDialogueEnd({
        characterId: character.id,
        history: dialogHistory,
        revealedClues,
        revealedSDGs
      });
    }
  };

  // When there are no choices, a click on the dialog should end it
  const handleDialogClose = () => {
    if (!currentNode?.choices || currentNode.choices.length === 0) {
      handleDialogueEnd();
    }
  };

  // If dialogue is not active, don't render anything
  if (!isActive || !currentNode) {
    return null;
  }

  return (
    <div className={`dialog-system ${className}`}>
      <Dialog 
        character={character}
        message={currentNode.text}
        choices={currentNode.choices || []}
        onChoiceSelected={handleChoiceSelected}
        onClose={handleDialogClose}
        showCloseButton={!currentNode.choices || currentNode.choices.length === 0}
      />
    </div>
  );
};

DialogSystem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string,
  }),
  dialogTree: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      nextNodeId: PropTypes.string,
      revealClueId: PropTypes.string,
      revealSDGId: PropTypes.number,
      completeObjective: PropTypes.string
    })),
    children: PropTypes.array
  }),
  onDialogueEnd: PropTypes.func,
  onClueReveal: PropTypes.func,
  onSDGReveal: PropTypes.func,
  onObjectiveComplete: PropTypes.func,
  className: PropTypes.string,
};

export default DialogSystem;