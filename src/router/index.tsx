import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import NoteEditor from '../pages/notes/create/index';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes/new" element={<NoteEditor />} />
        <Route path="/notes/:id" element={<NoteEditor />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};