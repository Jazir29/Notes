import React from 'react';
import { Plus } from 'lucide-react';
import { NoteColor } from '../types';
import { COLOR_PALETTE } from '../constants';

interface SidebarProps {
  onAddClick: () => void;
  selectedColorFilter: NoteColor | null;
  onFilterChange: (color: NoteColor | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onAddClick, selectedColorFilter, onFilterChange }) => {
  return (
    <div className="w-24 bg-white h-screen fixed left-0 top-0 flex flex-col items-center py-8 border-r border-slate-100 z-50">
      {/* Logo Area */}
      <div className="mb-12 font-bold text-sm tracking-wide text-slate-900 rotate-0">
        Notes App
      </div>

      {/* Add Button */}
      <button 
        onClick={onAddClick}
        className="mb-12 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 group"
      >
        <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Color Filters */}
      <div className="flex flex-col gap-4 items-center">
        <button
            onClick={() => onFilterChange(null)}
            className={`w-4 h-4 rounded-full border border-slate-300 ${selectedColorFilter === null ? 'ring-2 ring-slate-400 ring-offset-2 bg-slate-200' : 'bg-transparent'}`}
            title="All"
        />
        {COLOR_PALETTE.map((color) => (
          <button
            key={color.value}
            onClick={() => onFilterChange(color.value === selectedColorFilter ? null : color.value)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${color.value} ${
              selectedColorFilter === color.value 
                ? 'ring-2 ring-slate-400 ring-offset-2 scale-110' 
                : 'hover:scale-110'
            }`}
            title={color.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;