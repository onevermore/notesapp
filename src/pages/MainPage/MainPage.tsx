import Button from "@/components/ui/Button/Button";
import { Note } from "@/shared/types/note.data";
import { Link } from "react-router-dom";
import { Heading } from "@/components/ui/Heading/Heading";
import { NoteList } from "@/components/Notes/NoteList/NoteList";
import { Search } from "@/components/Search/Search";
import { ChangeEvent, useState } from "react";

interface IMainProps {
  notes: Note[];
  handleDeleteNote: (id: string) => void;
}

export const MainPage = ({ notes, handleDeleteNote }: IMainProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div>
        <h2 className="text-xl mb-3">Search:</h2>
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <Link to="/new">
        <Button>Create a new note</Button>{" "}
      </Link>
      <div>
        <Heading title="Notes List" />
        <div className="flex gap-4 justify-between">
          <NoteList
            deleteNote={handleDeleteNote}
            notes={searchTerm !== "" ? filteredNotes : notes}
          />
        </div>
      </div>
    </div>
  );
};
