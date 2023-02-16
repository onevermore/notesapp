import { Note, Tag } from "shared/types/note.data";
import { useState } from "react";
import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import Button from "@/ui/Button/Button";
import s from "./NoteForm.module.scss";
import { v4 as uuidV4 } from "uuid";

type INoteForm = {
  onSubmit: (data: Note) => void;
} & Partial<Note>;

export const NoteForm = ({
  onSubmit,
  id = "",
  title = "",
  body = "",
  tags = [],
}: INoteForm) => {
  const [noteTags, setNoteTags] = useState<Tag[]>(tags);
  const titleRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
    const currId = id === "" ? uuidV4() : id;

    onSubmit({
      id: currId,
      title: titleRef.current!.value,
      body: textareaRef.current!.value,
      tags: noteTags,
    });
    navigate("/");
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <fieldset className="flex items-center justify-around">
        <div className="flex flex-col basis-1/4">
          <label htmlFor={"title"}>Title</label>
          <input
            ref={titleRef}
            className={s.title}
            id={"title"}
            defaultValue={title}
            type="text"
            placeholder=""
            required
          />
        </div>
        <div className="flex flex-col basis-1/3">
          <label htmlFor={id + "tags"}>Tags</label>
          <CreatableReactSelect
            onCreateOption={(label) => {
              const newTag = { id: uuidV4(), label };
              setNoteTags((prev) => [...prev, newTag]);
            }}
            value={noteTags.map((tag) => {
              return {
                label: tag.label,
                value: tag.id,
              };
            })}
            onChange={(tags) => {
              setNoteTags(
                tags.map((tag) => {
                  return {
                    label: tag.label,
                    id: tag.value,
                  };
                })
              );
            }}
            isMulti
          />
        </div>
      </fieldset>

      <fieldset className="p-layout flex flex-col">
        <label>Body</label>
        <textarea defaultValue={body} ref={textareaRef} required rows={15} />
      </fieldset>

      <div className="flex items-center gap-5 justify-end mx-12">
        <Button type="submit">Save</Button>
        <Link to={`/`}>
          <Button type="button">Cancel</Button>
        </Link>
      </div>
    </form>
  );
};
