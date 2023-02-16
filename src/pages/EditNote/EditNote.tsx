import { NoteForm } from "@/components/NoteForm/NoteForm";
import { Heading } from "@/components/ui/Heading/Heading";
import { Note } from "@/shared/types/note.data";
import { useNote } from "hooks/useNote";

interface EditNoteProps {
  onSubmit: (data: Note) => void;
}

export const EditNote = ({ onSubmit }: EditNoteProps) => {
  const { id, tags, title, body } = useNote();

  return (
    <div className="w-[80%]">
      <Heading title="EDIT NOTE" />
      <NoteForm
        onSubmit={(data) => onSubmit(data)}
        id={id}
        title={title}
        body={body}
        tags={tags}
      />
    </div>
  );
};
