import { Link } from "react-router-dom";
import { IMenuItem } from "./menu.types";

interface IMenuProps {
  item: IMenuItem;
}

export const MenuItem = ({ item }: IMenuProps) => {
  return (
    <li className="m-5 border-dotted border-black">
      <Link to={item.link}>{item.title}</Link>
    </li>
  );
};
