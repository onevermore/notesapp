import { Heading } from "@/ui/Heading/Heading";
import { NoteForm } from "@/components/NoteForm/NoteForm";
import { INoteData } from "@/shared/types/note.data";

interface INewNote {
  onSubmit: (data: INoteData) => void;
}

export const NewNote = ({ onSubmit }: INewNote) => {
  return (
    <>
      <Heading title="Create New Note" />
      <NoteForm onSubmit={onSubmit} />
    </>
  );
};
