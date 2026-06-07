import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "../lib/components/Button";
import type { PopoverProps } from "../lib/components/Popover";
import { Popover } from "../lib/components/Popover";

export default {
  title: "Components/Popover",
  component: Popover,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex h-64 items-center justify-center">{Story()}</div>
    ),
  ],
} as Meta;

const SampleContent = (
  <div className="w-64 p-3 text-sm text-gray-500 dark:text-gray-400">
    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
      Popover title
    </h3>
    <p>
      And here's some amazing content. It's very engaging. Right?
    </p>
  </div>
);

const Template: StoryFn<PopoverProps> = (args: PopoverProps) => (
  <Popover {...args}>
    <Button>Toggle popover</Button>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {
  content: SampleContent,
};

export const HoverTrigger = Template.bind({});
HoverTrigger.storyName = "Trigger: hover";
HoverTrigger.args = {
  content: SampleContent,
  trigger: "hover",
};

export const PlacementRight = Template.bind({});
PlacementRight.storyName = "Placement: right";
PlacementRight.args = {
  content: SampleContent,
  placement: "right",
};

export const NoArrow = Template.bind({});
NoArrow.storyName = "Without arrow";
NoArrow.args = {
  content: SampleContent,
  arrow: false,
};
