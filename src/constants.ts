import { Note, NoteColor } from './types';

export const INITIAL_NOTES: Note[] = [
  {
    id: '1',
    title: 'Esta es una nota.',
    content: 'Una simple introducción al estilo de la aplicación.',
    color: NoteColor.Naranja,
    date: '21 Mayo, 2020',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Esta es una nota.',
    content: 'Una simple introducción al estilo de la aplicación.',
    color: NoteColor.Amarillo,
    date: '21 Mayo, 2020',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Esta es una nota.',
    content: 'Una simple introducción al estilo de la aplicación.',
    color: NoteColor.Rosado,
    date: '25 Mayo, 2020',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Esta es una nota.',
    content: 'Una simple introducción al estilo de la aplicación.',
    color: NoteColor.Morado,
    date: '10 Junio, 2020',
    isFavorite: true,
  },
  {
    id: '5',
    title: 'Esta es una nota.',
    content: 'Una simple introducción al estilo de la aplicación.',
    color: NoteColor.Verde,
    date: '1 Julio, 2020',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Esta es una nota.',
    content: 'Una simple introducción al estilo de la aplicación.',
    color: NoteColor.Cian,
    date: '14 Agosto, 2020',
    isFavorite: false,
  }
];

export const COLOR_PALETTE = [
  { label: 'Naranja', value: NoteColor.Naranja },
  { label: 'Amarillo', value: NoteColor.Amarillo },
  { label: 'Rosado', value: NoteColor.Rosado },
  { label: 'Morado', value: NoteColor.Morado },
  { label: 'Cian', value: NoteColor.Cian },
  { label: 'Verde', value: NoteColor.Verde },
];


