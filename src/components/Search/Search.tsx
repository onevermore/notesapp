import { ChangeEvent } from "react";
import s from "./Search.module.scss";

interface ISearch {
  searchTerm: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ searchTerm, handleSearch }: ISearch) => {
  return (
    <div className={s.search}>
      <input placeholder="Search" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};
