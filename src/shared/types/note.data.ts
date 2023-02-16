export interface Tag {
  id: string;
  label: string;
}

export interface INoteData {
  title: string;
  body: string;
  tags: Tag[];
}

export type Note = INoteData & { id: string };

export type NoteDataProps = {
  notes: Note[];
};
