import type { Meta, StoryFn } from "@storybook/react";
import type { RangeSliderProps } from "../lib/components/RangeSlider";
import { RangeSlider } from "../lib/components/RangeSlider";

export default {
  title: "Components/RangeSlider",
  component: RangeSlider,
  decorators: [(Story): JSX.Element => <div className="max-w-md">{Story()}</div>],
} as Meta;

const Template: StoryFn<RangeSliderProps> = (args: RangeSliderProps) => (
  <RangeSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { sizing: "sm" };

export const Large = Template.bind({});
Large.args = { sizing: "lg" };

export const WithSteps = Template.bind({});
WithSteps.args = { min: 0, max: 10, step: 2, defaultValue: 4 };
