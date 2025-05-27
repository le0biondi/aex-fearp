import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext as useGame } from '../../context/GameContext';
import Button from '../ui/Button';

const MainMenu = () => {
  const navigate = useNavigate();
  const { currentCase, completedCases } = useGame();
  const [showContinue, setShowContinue] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    // Check if there's a current case or any completed cases to show continue button
    const hasSavedGame = currentCase || completedCases.length > 0;
    setShowContinue(hasSavedGame);
  }, [currentCase, completedCases]);

  const handleNewGame = () => {
    navigate('/cases');
  };

  const handleContinue = () => {
    // If there's an active case, continue to that case
    if (currentCase) {
      navigate(`/play/${currentCase}`);
    } else {
      // Otherwise, go to case selection
      navigate('/cases');
    }
  };

  const handleCredits = () => {
    setShowCredits(true);
  };

  const handleCloseCredits = () => {
    setShowCredits(false);
  };

  return (
    <div className="main-menu">
      <div className="menu-container">
        <h1 className="menu-title">O Mistério do Futuro Sustentável</h1>
        <p className="menu-subtitle">
          Embarque em uma jornada investigativa pelo mundo dos Objetivos de Desenvolvimento Sustentável e descubra como suas ações podem moldar um futuro melhor para todos.
        </p>

        <div className="flex flex-col items-center w-full max-w-xs">
          <Button 
            variant="primary"
            size="lg"
            fullWidth
            className="menu-option menu-option-primary"
            onClick={handleNewGame}
          >
            Novo Jogo
          </Button>

          {showContinue && (
            <Button 
              variant="secondary"
              size="lg"
              fullWidth
              className="menu-option menu-option-secondary"
              onClick={handleContinue}
            >
              Continuar
            </Button>
          )}

          <Button 
            variant="neutral"
            size="lg"
            fullWidth
            className="menu-option menu-option-secondary"
            onClick={handleCredits}
          >
            Créditos
          </Button>
        </div>

        {/* Credits Modal */}
        {showCredits && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">Créditos</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Desenvolvimento</h3>
                <p>Este jogo educativo foi desenvolvido como um projeto para ensinar sobre os Objetivos de Desenvolvimento Sustentável da ONU.</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Conteúdo Educacional</h3>
                <p>O conteúdo sobre os ODS é baseado nos materiais oficiais das Nações Unidas e adaptado para um formato interativo de jogo.</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Objetivos de Desenvolvimento Sustentável</h3>
                <p>Os 17 ODS foram adotados por todos os Estados-Membros das Nações Unidas em 2015 como um chamado universal para acabar com a pobreza, proteger o planeta e garantir que todas as pessoas desfrutem de paz e prosperidade até 2030.</p>
              </div>
              
              <div className="text-center mt-6">
                <Button onClick={handleCloseCredits}>
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-4 right-4 text-white/70 text-sm">
          © 2023 Jogo Educacional sobre ODS
        </div>
      </div>
    </div>
  );
};

export default MainMenu;