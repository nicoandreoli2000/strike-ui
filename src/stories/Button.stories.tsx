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

export const Primary = () => (
  <Button testProp="primary btn" color="red">
    Button
  </Button>
);
export const Secondary = () => (
  <Button testProp="secondary btn" color="green">
    Button
  </Button>
);
