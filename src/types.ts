export enum NoteColor {
  Naranja = 'bg-[#FBC486]',
  Amarillo = 'bg-[#FDF166]',
  Rosado = 'bg-[#FCA5A5]', // Ajustado para coincidir mejor con la imagen
  Morado = 'bg-[#D8B4FE]',
  Cian = 'bg-[#67E8F9]',
  Verde = 'bg-[#D1FAE5]',
  Blanco = 'bg-white'
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
