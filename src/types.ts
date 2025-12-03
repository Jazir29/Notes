export enum NoteColor {
  Orange = 'bg-[#FBC486]',
  Yellow = 'bg-[#FDF166]',
  Pink = 'bg-[#FCA5A5]', // Adjusted to match image better
  Purple = 'bg-[#D8B4FE]',
  Cyan = 'bg-[#67E8F9]',
  Green = 'bg-[#D1FAE5]',
  White = 'bg-white'
}

export interface Note {
  id: string;
  title: string;
  content: string;
  color: NoteColor;
  date: string;
  isFavorite: boolean;
}

export type NoteFormData = Omit<Note, 'id' | 'date'>;
