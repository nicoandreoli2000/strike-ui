import { FC, HTMLProps } from "react";
export interface IButton extends HTMLProps<HTMLButtonElement> {
  testProp: string;
}
export const Button: FC<IButton> = ({ testProp, children, onClick }) => {
  return (
    <button onClick={onClick}>
      Test prop: {testProp} - Children: {children}
    </button>
  );
};
