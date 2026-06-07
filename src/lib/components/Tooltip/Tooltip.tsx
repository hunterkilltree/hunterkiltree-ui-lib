"use client";

import type { FC } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FloatingProps, FlowbiteFloatingTheme } from "../Floating";
import { Floating } from "../Floating";

export type FlowbiteTooltipTheme = FlowbiteFloatingTheme;

export interface TooltipProps extends Omit<FloatingProps, "theme"> {
  theme?: DeepPartial<FlowbiteTooltipTheme>;
}

export const Tooltip: FC<TooltipProps> = ({ theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme);

  return <Floating {...props} theme={theme} />;
};
