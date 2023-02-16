import React, { ReactNode } from "react";
import s from "./Layout.module.scss";
import { Navigation } from "./Navigation/Navigation";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className={s.layout}>
      <Navigation />
      <div className={s.center}>{children}</div>
    </div>
  );
};
