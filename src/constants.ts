import { Note, NoteColor } from './types';

export const INITIAL_NOTES: Note[] = [
  {
    id: '1',
    title: 'This is Docket note.',
    content: 'A simple introduction to the application style.',
    color: NoteColor.Orange,
    date: 'May 21, 2020',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'The beginning of screenless design',
    content: 'UI jobs to be taken over by Solution Architect.',
    color: NoteColor.Yellow,
    date: 'May 21, 2020',
    isFavorite: false,
  },
  {
    id: '3',
    title: '13 Things You Should Give Up',
    content: 'If You Want To Be a Successful UX Designer.',
    color: NoteColor.Pink,
    date: 'May 25, 2020',
    isFavorite: false,
  },
  {
    id: '4',
    title: '10 UI & UX Lessons',
    content: 'From Designing My Own Product.',
    color: NoteColor.Purple,
    date: 'Jun 10, 2020',
    isFavorite: true,
  },
  {
    id: '5',
    title: '52 Research Terms you need to know',
    content: 'as a UX Designer',
    color: NoteColor.Green, // Actually appears lime/green in image
    date: 'Jul 1, 2020',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Text fields & Forms design',
    content: '– UI component series',
    color: NoteColor.Cyan,
    date: 'Aug 14, 2020',
    isFavorite: false,
  }
];

export const COLOR_PALETTE = [
  { label: 'Orange', value: NoteColor.Orange },
  { label: 'Yellow', value: NoteColor.Yellow },
  { label: 'Pink', value: NoteColor.Pink },
  { label: 'Purple', value: NoteColor.Purple },
  { label: 'Cyan', value: NoteColor.Cyan },
  { label: 'Green', value: NoteColor.Green },
];
