import React from 'react';
import { Pencil, Star } from 'lucide-react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onToggleFavorite: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onToggleFavorite }) => {
  return (
    <div 
      className={`relative group aspect-square rounded-[2rem] p-8 flex flex-col justify-between transition-all 
        duration-300 hover:shadow-xl hover:-translate-y-1 ${note.color}`}
    >
        {/* Favorite Star */}
        <div className="absolute top-6 right-6 z-10">
             <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(note.id);
                }}
                className={`p-2 rounded-full transition-colors ${note.isFavorite ? 'bg-slate-900 text-yellow-400' : 'bg-black/5 text-slate-600 hover:bg-black/10'}`}
             >
                 <Star size={16} fill={note.isFavorite ? "currentColor" : "none"} />
             </button>
        </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 line-clamp-3">
          {note.title}
        </h3>
        <p className="text-slate-700 font-medium text-sm leading-relaxed line-clamp-4">
          {note.content}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-slate-500 text-xs font-semibold tracking-wide">
          {note.date}
        </span>
        <button 
        onClick={() => onEdit(note)}
          className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md transform translate-y-2 group-hover:translate-y-0"
        >
          <Pencil size={16} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;