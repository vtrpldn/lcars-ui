import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Screen from "./Screen";

export default {
  title: "Example/Screen",
  component: Screen,
} as ComponentMeta<typeof Screen>;

const Template: ComponentStory<typeof Screen> = (args) => <Screen {...args} />;

export const Primary = Template.bind({});
