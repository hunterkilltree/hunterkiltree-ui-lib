import type { Meta, StoryFn } from "@storybook/react";
import type { FileInputProps } from "../lib/components/FileInput";
import { FileInput } from "../lib/components/FileInput";

export default {
  title: "Components/FileInput",
  component: FileInput,
  decorators: [(Story): JSX.Element => <div className="max-w-md">{Story()}</div>],
} as Meta;

const Template: StoryFn<FileInputProps> = (args: FileInputProps) => (
  <FileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  sizing: "sm",
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  helperText: "PNG, JPG or GIF (max 5 files).",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Failure = Template.bind({});
Failure.storyName = "With validation (failure)";
Failure.args = {
  color: "failure",
  helperText: "A file is required.",
};
