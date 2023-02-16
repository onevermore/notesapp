import { Note } from "@/shared/types/note.data";

export const useTags = (notes: Note[]) => {
  const res = notes
    .map((note) => note.tags)
    .reduce((acc: string[], tagss) => {
      const tags = tagss.map((t) => t.label);
      acc = [...acc, ...tags];
      return acc;
    }, []);

  return {
    tags: [...new Set(res)],
  };
};
