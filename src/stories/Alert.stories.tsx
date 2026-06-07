import type { Meta, StoryFn } from "@storybook/react";
import { HiInformationCircle } from "react-icons/hi";
import type { AlertProps } from "../lib/components/Alert";
import { Alert } from "../lib/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

const Template: StoryFn<AlertProps> = (args: AlertProps) => (
  <Alert {...args}>
    <span className="font-medium">Info alert!</span> Change a few things up and
    try submitting again.
  </Alert>
);

export const Default = Template.bind({});
Default.args = { color: "info" };

export const WithIcon = Template.bind({});
WithIcon.args = { color: "success", icon: HiInformationCircle };

export const Dismissible = Template.bind({});
Dismissible.args = {
  color: "warning",
  icon: HiInformationCircle,
  onDismiss: () => undefined,
};

export const BorderAccent = Template.bind({});
BorderAccent.args = {
  color: "failure",
  withBorderAccent: true,
  icon: HiInformationCircle,
};
