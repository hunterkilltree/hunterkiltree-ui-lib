import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "../lib/components/Button";
import type { TooltipProps } from "../lib/components/Tooltip";
import { Tooltip } from "../lib/components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex h-32 items-center justify-center">{Story()}</div>
    ),
  ],
} as Meta;

const Template: StoryFn<TooltipProps> = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: "Tooltip content",
};

export const LightStyle = Template.bind({});
LightStyle.storyName = "Light style";
LightStyle.args = {
  content: "Tooltip content",
  style: "light",
};

export const PlacementRight = Template.bind({});
PlacementRight.storyName = "Placement: right";
PlacementRight.args = {
  content: "Tooltip content",
  placement: "right",
};

export const ClickTrigger = Template.bind({});
ClickTrigger.storyName = "Trigger: click";
ClickTrigger.args = {
  content: "Tooltip content",
  trigger: "click",
};

export const NoArrow = Template.bind({});
NoArrow.storyName = "Without arrow";
NoArrow.args = {
  content: "Tooltip content",
  arrow: false,
};
