import { Note } from "shared/types/note.data";
import { NoteCard } from "../NoteCard/NoteCard";

interface INoteList {
  notes: Note[];
  deleteNote: (id: string) => void;
}

export const NoteList = ({ notes, deleteNote }: INoteList) => {
  return (
    <div>
      {/*grid grid-cols-3 grid-rows-3 gap-4 place-items-center */}
      <ul className="flex-center-between flex-wrap">
        {notes?.map((note, i) => (
          <NoteCard
            key={i}
            id={note.id}
            title={note.title}
            body={note.body}
            tags={note.tags}
            deleteNote={deleteNote}
          />
        ))}
      </ul>
    </div>
  );
};
