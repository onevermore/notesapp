import { Tag } from "@/shared/types/note.data";
import { TagLabel } from "../ui/Tag/Tag";

interface iTagsList {
  tags: Tag[];
}

export const TagsList = ({ tags }: iTagsList) => {
  return (
    <div className="flex gap-2">
      {tags?.map((tag: Tag) => (
        <TagLabel key={tag.id} label={tag.label} />
      ))}
    </div>
  );
};
