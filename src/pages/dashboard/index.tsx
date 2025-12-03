import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Note, NoteColor } from '../../types';
import { INITIAL_NOTES } from '../../constants';
import Layout from '../../components/Layout';
import NoteCard from '../../components/NoteCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState<NoteColor | null>(null);

  useEffect(() => {
    // Simulate loading from local storage or API
    const saved = localStorage.getItem('docket_notes');
    if (saved) {
        setNotes(JSON.parse(saved));
    } else {
        setNotes(INITIAL_NOTES);
        localStorage.setItem('docket_notes', JSON.stringify(INITIAL_NOTES));
    }
  }, []);

  const handleCreate = () => {
      navigate('/notes/new');
  };

  const handleEdit = (note: Note) => {
      navigate(`/notes/${note.id}`);
  };

  const handleToggleFavorite = (id: string) => {
      const updated = notes.map(n => n.id === id ? { ...n, isFavorite: !n.isFavorite } : n);
      setNotes(updated);
      localStorage.setItem('docket_notes', JSON.stringify(updated));
  };

  const filteredNotes = notes.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            note.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesColor = selectedColor ? note.color === selectedColor : true;
      return matchesSearch && matchesColor;
  });

  return (
    <Layout 
        onAddClick={handleCreate}
        selectedColorFilter={selectedColor}
        onFilterChange={setSelectedColor}
    >
      <div className="flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Notes</h1>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors" size={20} />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white pl-12 pr-4 py-3 rounded-xl shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all"
                />
            </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20">
                {filteredNotes.map(note => (
                    <NoteCard 
                        key={note.id} 
                        note={note} 
                        onEdit={handleEdit}
                        onToggleFavorite={handleToggleFavorite}
                    />
                ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <p className="text-xl font-medium">No notes found</p>
                <p className="text-sm mt-2">Try adjusting your search or create a new one.</p>
            </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;