import { FC } from "react";
import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
export interface IButton extends ButtonProps {
  testProp: string;
}
export const Button: FC<IButton> = ({ testProp, children, ...props }) => {
  return (
    <ChakraButton {...props}>
      Test prop: {testProp} - Children: {children}
    </ChakraButton>
  );
};
