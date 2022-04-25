import { FC } from "react";
import {
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
} from "@chakra-ui/react";
export interface ButtonProps extends ChakraButtonProps {
  testProp: string;
}
export const Button: FC<ButtonProps> = ({ testProp, children, ...props }) => {
  return (
    <ChakraButton {...props}>
      Test prop: {testProp} - Children: {children}
    </ChakraButton>
  );
};
