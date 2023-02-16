import Button from "@/components/ui/Button/Button";
import { Link } from "react-router-dom";
import { Note } from "shared/types/note.data";
import s from "./NoteCard.module.scss";
import editIcon from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import { TagsList } from "@/components/TagsList/TagsList";

type NoteCardProps = Note & {
  deleteNote: (id: string) => void;
};

export const NoteCard = ({
  title,
  tags,
  body,
  id,
  deleteNote,
}: NoteCardProps) => {
  return (
    <li className={s.card}>
      <div className="text-3xl mb-5">{title}</div>
      <div className="text-xl flex">
        {body.slice(0, 30)} <p>...</p>
      </div>
      <div className="flex justify-start  gap-2">
        <TagsList tags={tags} />
      </div>
      <hr className={s.line} />

      <div className="flex-center-between gap-4 ">
        <Link to={`/${id}`}>
          <Button className="bg-green-700 py-2 text-ml">Open</Button>
        </Link>
        <Link to={`/${id}/edit`}>
          <img src={editIcon} alt="Edit" className="w-10" />
        </Link>
        <button onClick={() => deleteNote(id)}>
          <img src={deleteIcon} alt="Delete" className="w-8 h-8" />{" "}
        </button>
      </div>
    </li>
  );
};
