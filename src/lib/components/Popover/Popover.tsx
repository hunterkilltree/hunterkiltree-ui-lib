"use client";

import type { FC } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FloatingProps, FloatingStyle, FlowbiteFloatingTheme } from "../Floating";
import { Floating } from "../Floating";

export type FlowbitePopoverTheme = FlowbiteFloatingTheme;

export interface PopoverProps extends Omit<FloatingProps, "theme"> {
  theme?: DeepPartial<FlowbitePopoverTheme>;
}

export const Popover: FC<PopoverProps> = ({
  theme: customTheme = {},
  trigger = "click",
  style = "light" as FloatingStyle,
  ...props
}) => {
  const theme = mergeDeep(getTheme().popover, customTheme);

  return <Floating {...props} trigger={trigger} style={style} theme={theme} />;
};
