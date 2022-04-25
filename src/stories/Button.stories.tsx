// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "../components/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = () => <Button color="red">Button</Button>;
export const Secondary = () => <Button color="green">Button</Button>;
