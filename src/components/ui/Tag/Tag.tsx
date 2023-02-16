import { Tag } from "shared/types/note.data";

export const TagLabel = ({ label }: Partial<Tag>) => {
  return <div className="btn-primary px-1 py-2 text-ml">{label}</div>;
};
