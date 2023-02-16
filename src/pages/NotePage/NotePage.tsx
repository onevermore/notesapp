import { TagsList } from "@/components/TagsList/TagsList";
import Button from "@/components/ui/Button/Button";
import { Heading } from "@/components/ui/Heading/Heading";
import { useNote } from "hooks/useNote";
import { useNavigate } from "react-router-dom";

export const NotePage = () => {
  const navigate = useNavigate();
  const { title, body, tags } = useNote();

  const handleReturn = () => {
    navigate("..");
  };

  return (
    <div className="w-[80%]">
      <div className="flex flex-col gap-5">
        <Heading title={`Note: ${title}`} />
        {tags && <TagsList tags={tags} />}
        <textarea readOnly rows={15}>
          {body}
        </textarea>
        <div>
          <Button onClick={handleReturn}>Back</Button>
        </div>
      </div>
    </div>
  );
};
