import type { Meta, StoryFn } from "@storybook/react";
import { HiOutlineUser } from "react-icons/hi";
import type { SelectProps } from "../lib/components/Select";
import { Select } from "../lib/components/Select";

export default {
  title: "Components/Select",
  component: Select,
  decorators: [(Story): JSX.Element => <div className="max-w-md">{Story()}</div>],
} as Meta;

const Template: StoryFn<SelectProps> = (args: SelectProps) => (
  <Select {...args}>
    <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: HiOutlineUser,
};

export const Small = Template.bind({});
Small.args = {
  sizing: "sm",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Failure = Template.bind({});
Failure.storyName = "With validation (failure)";
Failure.args = {
  color: "failure",
  helperText: "Please select a valid country.",
};
