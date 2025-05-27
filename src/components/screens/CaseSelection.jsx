import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext as useGame } from '../../context/GameContext';
import Button from '../ui/Button';
import { getAllCases } from '../../data/cases';

const CaseSelection = () => {
  const navigate = useNavigate();
  const { completedCases, selectCase } = useGame();
  const [selectedCase, setSelectedCase] = useState(null);
  const availableCases = getAllCases();

  // Check if a case has been completed
  const isCaseCompleted = (caseId) => {
    return completedCases && completedCases.some(c => c === caseId);
  };

  const handleSelectCase = (caseData) => {
    setSelectedCase(caseData);
  };

  const handleStartCase = () => {
    if (selectedCase) {
      selectCase(selectedCase);
      navigate(`/play/${selectedCase.id}`);
    }
  };

  const handleBackToMenu = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-700">Selecionar Caso</h1>
          <Button variant="neutral" onClick={handleBackToMenu}>
            Voltar ao Menu
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCases.map((caseData) => {
            const isCompleted = isCaseCompleted(caseData.id);
            const isCurrentlySelected = selectedCase && selectedCase.id === caseData.id;
            
            return (
              <div 
                key={caseData.id}
                className={`case-card relative ${isCurrentlySelected ? 'ring-2 ring-emerald-500 transform scale-[1.02]' : ''}`}
                onClick={() => handleSelectCase(caseData)}
              >
                <div 
                  className="h-40 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${caseData.thumbnail})` }}
                ></div>
                {isCompleted && (
                  <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    Concluído
                  </div>
                )}
                <div className="case-card-content p-4 bg-white shadow-md">
                  <h2 className="text-xl font-bold mb-2">{caseData.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{caseData.description}</p>
                  
                  <div className="mb-3">
                    {caseData.objectives && caseData.objectives.some(obj => obj.requiredSDGs) && 
                      caseData.objectives.filter(obj => obj.requiredSDGs).flatMap(obj => obj.requiredSDGs).map((sdgId) => (
                        <span 
                          key={sdgId} 
                          className={`sdg-tag sdg-${sdgId} text-white bg-blue-500 rounded-full px-2 py-1 text-xs mr-1`}
                        >
                          ODS {sdgId}
                        </span>
                      ))
                    }
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Dificuldade:</span> {caseData.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedCase && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">{selectedCase.title}</h2>
            <p className="text-gray-700 mb-6">{selectedCase.background || selectedCase.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Objetivos:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {selectedCase.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-700">{objective.description}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleStartCase}
                size="lg"
              >
                {isCaseCompleted(selectedCase.id) ? 'Jogar Novamente' : 'Iniciar Investigação'}
              </Button>
            </div>
          </div>
        )}

        {availableCases.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-500 mb-4">Nenhum caso disponível no momento</h2>
            <p className="text-gray-600 mb-6">Mais casos serão adicionados em breve.</p>
            <Button onClick={handleBackToMenu}>
              Voltar ao Menu
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseSelection;