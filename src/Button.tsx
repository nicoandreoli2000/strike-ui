import { FC, HTMLProps } from "react";

export interface IButton extends HTMLProps<HTMLButtonElement> {}
export const Button: FC<IButton> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
