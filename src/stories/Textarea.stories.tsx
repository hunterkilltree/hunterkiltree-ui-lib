import type { Meta, StoryFn } from "@storybook/react";
import type { TextareaProps } from "../lib/components/Textarea";
import { Textarea } from "../lib/components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  decorators: [(Story): JSX.Element => <div className="max-w-md">{Story()}</div>],
} as Meta;

const Template: StoryFn<TextareaProps> = (args: TextareaProps) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Write your thoughts here...",
  rows: 4,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  placeholder: "Write your thoughts here...",
  rows: 4,
  shadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled textarea",
  rows: 4,
  disabled: true,
};

export const Failure = Template.bind({});
Failure.storyName = "With validation (failure)";
Failure.args = {
  placeholder: "Write your thoughts here...",
  rows: 4,
  color: "failure",
  helperText: "Some error message.",
};
