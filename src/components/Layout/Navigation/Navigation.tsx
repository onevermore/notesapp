import { Menu } from "./Menu/Menu";
import s from "./Navigation.module.scss";
import "./Menu/Menu";
import { firstMenu } from "./Menu/menu.data";
import notes from "../../../assets/notes.png";
import { Heading } from "@/components/ui/Heading/Heading";
import { memo } from "react";

export const Navigation = memo(() => {
  return (
    <div className={s.navigation}>
      <img src={notes} className="-m-5 object-contain" />
      <Heading title="Notes App" />
      <Menu menu={firstMenu} />
    </div>
  );
});
