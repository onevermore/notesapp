import cn from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

import s from "./form.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
{
}

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button className={cn(s.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
