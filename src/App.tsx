import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/global.scss";
import { Layout } from "@/components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { NewNote } from "./pages/NewNote/NewNote";
import { useLocalStorage } from "hooks/useLocalStorage";
import { INoteData, Note } from "shared/types/note.data";
import { EditNote } from "pages/EditNote/EditNote";
import { NotePage } from "pages/NotePage/NotePage";
import { useTags } from "hooks/useTags";

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);

  // const { tags } = useTags(notes);

  const handleCreateNote = ({ ...newNote }: INoteData) => {
    setNotes((prev: Note[]) => {
      return [
        ...prev,
        {
          ...newNote,
          id: Date.now().toString(),
        },
      ];
    });
  };

  const handleEditSubmit = ({ ...updatedNote }: Note) => {
    setNotes((prev: Note[]) => {
      return prev.map((note) => {
        if (note.id === updatedNote.id) {
          return { ...updatedNote };
        } else {
          return note;
        }
      });
    });
  };
  const handleDeleteNote = (id: string) => {
    setNotes((prev: Note[]) => prev.filter((note: Note) => note.id !== id));
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage handleDeleteNote={handleDeleteNote} notes={notes} />
          }
        />
        <Route path="/new" element={<NewNote onSubmit={handleCreateNote} />} />
        <Route path="/:id">
          <Route index element={<NotePage />} />
          <Route
            path="edit"
            element={<EditNote onSubmit={handleEditSubmit} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
