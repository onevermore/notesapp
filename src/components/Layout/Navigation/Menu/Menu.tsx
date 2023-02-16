import { IMenu } from "./menu.types";
import { MenuItem } from "./MenuItem";

type MenuType = {
  menu: IMenu;
};

export const Menu = ({ menu: { items } }: MenuType) => {
  return (
    <ul className="flex-center-between list-none gap-24 ml-8 text-lg md:text-2lg ">
      {items.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </ul>
  );
};
