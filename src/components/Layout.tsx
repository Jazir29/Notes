import React from 'react';
import Sidebar from './Sidebar';
import { NoteColor } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onAddClick: () => void;
  selectedColorFilter: NoteColor | null;
  onFilterChange: (color: NoteColor | null) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onAddClick, selectedColorFilter, onFilterChange }) => {
  return (
    <div className="min-h-screen bg-[#FCFCFD]">
      <Sidebar 
        onAddClick={onAddClick} 
        selectedColorFilter={selectedColorFilter}
        onFilterChange={onFilterChange}
      />
      <main className="pl-24 w-full min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;