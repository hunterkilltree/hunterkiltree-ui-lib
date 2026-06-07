import type { Meta, StoryFn } from "@storybook/react";
import type { AvatarProps } from "../lib/components/Avatar";
import { Avatar } from "../lib/components/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [(Story): JSX.Element => <div className="flex gap-4">{Story()}</div>],
} as Meta;

const IMG = "https://flowbite.com/docs/images/people/profile-picture-5.jpg";

const Template: StoryFn<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = { img: IMG };

export const Rounded = Template.bind({});
Rounded.args = { img: IMG, rounded: true };

export const WithStatus = Template.bind({});
WithStatus.args = { img: IMG, rounded: true, status: "online", statusPosition: "bottom-right" };

export const Initials = Template.bind({});
Initials.args = { placeholderInitials: "RR", rounded: true };

export const Placeholder = Template.bind({});
Placeholder.args = { rounded: true, bordered: true, color: "purple" };
