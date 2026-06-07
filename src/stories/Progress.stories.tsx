import type { Meta, StoryFn } from "@storybook/react";
import type { ProgressProps } from "../lib/components/Progress";
import { Progress } from "../lib/components/Progress";

export default {
  title: "Components/Progress",
  component: Progress,
  decorators: [(Story): JSX.Element => <div className="max-w-md">{Story()}</div>],
} as Meta;

const Template: StoryFn<ProgressProps> = (args: ProgressProps) => (
  <Progress {...args} />
);

export const Default = Template.bind({});
Default.args = { progress: 45 };

export const WithLabel = Template.bind({});
WithLabel.args = {
  progress: 50,
  textLabel: "Flowbite",
  labelText: true,
  labelProgress: true,
  size: "lg",
};

export const Large = Template.bind({});
Large.args = { progress: 75, size: "xl", color: "green" };
