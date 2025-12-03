import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Wand2, Trash2, Save } from 'lucide-react';
import { Note, NoteColor, NoteFormData } from '../../../types';
import { COLOR_PALETTE, INITIAL_NOTES } from '../../../constants';
import Button from '../../../components/Button';

const NoteEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // State
  const [formData, setFormData] = useState<NoteFormData>({
    title: '',
    content: '',
    color: NoteColor.Amarillo,
    isFavorite: false,
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load Data
  useEffect(() => {
    if (id) {
       const saved = localStorage.getItem('notes-storage');
       let notes: Note[] = saved ? JSON.parse(saved) : INITIAL_NOTES;
       const note = notes.find(n => n.id === id);
       if (note) {
         setFormData({
             title: note.title,
             content: note.content,
             color: note.color,
             isFavorite: note.isFavorite
         });
       } else {
         navigate('/'); // Note not found
       }
    } else {
       // Reset for new note - Random color
       setFormData({
           title: '',
           content: '',
           color: COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)].value,
           isFavorite: false,
       });
    }
    setIsLoading(false);
  }, [id, navigate]);

  const handleSave = () => {
      const saved = localStorage.getItem('notes-storage');
      let notes: Note[] = saved ? JSON.parse(saved) : INITIAL_NOTES;

      if (id) {
          // Update
          notes = notes.map(n => n.id === id ? { ...n, ...formData } : n);
      } else {
          // Create
          const newNote: Note = {
              ...formData,
              id: Date.now().toString(),
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          };
          notes = [newNote, ...notes];
      }
      
      localStorage.setItem('notes-storage', JSON.stringify(notes));
      navigate('/');
  };

  const handleDelete = () => {
      if (!id) return;
      const confirmDelete = window.confirm("Are you sure you want to delete this note?");
      if (!confirmDelete) return;

      const saved = localStorage.getItem('notes-storage');
      let notes: Note[] = saved ? JSON.parse(saved) : INITIAL_NOTES;
      notes = notes.filter(n => n.id !== id);
      localStorage.setItem('notes-storage', JSON.stringify(notes));
      navigate('/');
  };

  if (isLoading) return <div className="min-h-screen bg-slate-50" />;

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${formData.color === NoteColor.Blanco ? 'bg-slate-50' : formData.color} flex flex-col`}>
      {/* Header */}
      <div className="px-6 py-6 md:px-12 md:py-8 flex items-center justify-between sticky top-0 z-10">
        <button 
           onClick={() => navigate('/')}
           className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors backdrop-blur-sm"
        >
          <ArrowLeft size={24} className="text-slate-800" />
        </button>
        
        <div className="flex gap-3">
            {id && (
                <button 
                onClick={handleDelete}
                className="p-3 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-600 transition-colors backdrop-blur-sm"
                title="Delete Note"
                >
                <Trash2 size={24} />
                </button>
            )}
             <Button 
                onClick={handleSave} 
                className="!rounded-full px-6 py-3 text-base shadow-xl flex items-center gap-2"
             >
                <Save size={18} />
                Save Note
            </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-12 pb-12 flex flex-col gap-8">
        <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full bg-transparent text-4xl md:text-6xl font-bold text-slate-900 placeholder-slate-900/20 focus:outline-none"
        />
        
        {/* Colors Toolbar */}
         <div className="flex items-center gap-4 bg-white/40 backdrop-blur-md p-2 pl-4 rounded-full w-fit shadow-sm">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Color</span>
            <div className="w-px h-4 bg-slate-900/10"></div>
            <div className="flex gap-2">
                {COLOR_PALETTE.map((c) => (
                    <button
                        key={c.value}
                        onClick={() => setFormData({...formData, color: c.value})}
                        className={`w-6 h-6 rounded-full border border-black/5 transition-transform ${c.value} ${formData.color === c.value ? 'ring-2 ring-slate-800 ring-offset-2 scale-110' : 'hover:scale-110'}`}
                        title={c.label}
                    />
                ))}
            </div>
        </div>

        <textarea
            placeholder="Type your note here..."
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="w-full flex-1 min-h-[40vh] bg-transparent text-xl md:text-2xl text-slate-800 placeholder-slate-900/20 focus:outline-none resize-none leading-relaxed"
        />
      </div>
    </div>
  );
}

export default NoteEditor;