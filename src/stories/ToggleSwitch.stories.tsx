import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import type { ToggleSwitchProps } from "../lib/components/ToggleSwitch";
import { ToggleSwitch } from "../lib/components/ToggleSwitch";

export default {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
} as Meta;

const Template: StoryFn<ToggleSwitchProps> = (args: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(args.checked);
  return <ToggleSwitch {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});
Default.args = { checked: false, label: "Toggle me" };

export const On = Template.bind({});
On.args = { checked: true, label: "Enabled" };

export const Disabled = Template.bind({});
Disabled.args = { checked: true, disabled: true, label: "Disabled" };

export const Success = Template.bind({});
Success.args = { checked: true, color: "success", label: "Success color" };
