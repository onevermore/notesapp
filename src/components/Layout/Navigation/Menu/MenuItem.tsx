import { IMenuItem } from "./menu.types";

interface IMenuProps {
  item: IMenuItem;
}

export const MenuItem = ({ item }: IMenuProps) => {
  return (
    <li className="m-5 border-dotted border-black">
      <a href={item.link}>{item.title} </a>
    </li>
  );
};
