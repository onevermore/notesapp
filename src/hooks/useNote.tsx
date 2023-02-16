import { Note } from "@/shared/types/note.data";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const useNote = () => {
  const { id } = useParams();
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const res = notes.find((v) => v.id === id);

  return {
    id,
    title: res?.title,
    body: res?.body,
    tags: res?.tags,
  };
};
