import type { Meta, StoryFn } from "@storybook/react";
import { HiCheck } from "react-icons/hi";
import type { BadgeProps } from "../lib/components/Badge";
import { Badge } from "../lib/components/Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  decorators: [(Story): JSX.Element => <div className="flex gap-2">{Story()}</div>],
} as Meta;

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default", color: "info" };

export const Success = Template.bind({});
Success.args = { children: "Success", color: "success" };

export const WithIcon = Template.bind({});
WithIcon.args = { children: "2 minutes ago", color: "gray", icon: HiCheck };

export const IconOnly = Template.bind({});
IconOnly.args = { color: "info", icon: HiCheck };
