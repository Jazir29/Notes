import React from 'react';
import { AppRouter } from './router/index';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-purple-200 selection:text-purple-900">
      <AppRouter />
    </div>
  );
};

export default App;