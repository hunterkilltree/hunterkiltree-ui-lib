import type { Meta, StoryFn } from "@storybook/react";
import { HiCog, HiLogout, HiUserCircle, HiViewGrid } from "react-icons/hi";
import type { DropdownProps } from "../lib/components/Dropdown";
import { Dropdown } from "../lib/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex h-72 items-start justify-center pt-8">{Story()}</div>
    ),
  ],
} as Meta;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => (
  <Dropdown {...args}>
    <Dropdown.Header>
      <span className="block text-sm font-medium">Bonnie Green</span>
      <span className="block truncate text-sm text-gray-500">name@company.com</span>
    </Dropdown.Header>
    <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
    <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
    <Dropdown.Item icon={HiUserCircle}>Profile</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = {
  label: "Account",
};

export const NoArrow = Template.bind({});
NoArrow.storyName = "Without arrow icon";
NoArrow.args = {
  label: "Account",
  arrowIcon: false,
};

export const PlacementRight = Template.bind({});
PlacementRight.storyName = "Placement: right-start";
PlacementRight.args = {
  label: "Account",
  placement: "right-start",
};

export const KeepOpen = Template.bind({});
KeepOpen.storyName = "Stay open on click";
KeepOpen.args = {
  label: "Account",
  dismissOnClick: false,
};
