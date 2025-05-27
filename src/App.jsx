import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';

// Import screens
import MainMenu from './components/screens/MainMenu';
import CaseSelection from './components/screens/CaseSelection';
import GameInterface from './components/screens/GameInterface';
import InvestigationBoard from './components/screens/InvestigationBoard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-700 to-emerald-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">O Mistério do Futuro Sustentável</h1>
          <div className="w-32 h-1 bg-white/20 rounded-full mx-auto mb-4 overflow-hidden">
            <div className="h-full bg-white animate-pulse"></div>
          </div>
          <p className="text-white/90">Carregando o futuro...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <GameProvider>
        <div className="App min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/cases" element={<CaseSelection />} />
            <Route path="/play/:caseId" element={<GameInterface />} />
            <Route path="/investigation/:caseId" element={<InvestigationBoard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;