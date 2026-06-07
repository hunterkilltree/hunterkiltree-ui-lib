"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteColors, FlowbiteSizes } from "../Flowbite";

export interface FlowbiteProgressTheme {
  base: string;
  label: string;
  bar: string;
  color: FlowbiteProgressColors;
  size: FlowbiteProgressSizes;
}

export interface FlowbiteProgressColors
  extends Pick<
    FlowbiteColors,
    "dark" | "blue" | "red" | "green" | "yellow" | "indigo" | "purple" | "cyan" | "gray" | "lime" | "pink" | "teal"
  > {
  [key: string]: string;
}

export interface FlowbiteProgressSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg" | "xl"> {
  [key: string]: string;
}

export interface ProgressProps extends ComponentProps<"div"> {
  progress: number;
  color?: DynamicStringEnumKeysOf<FlowbiteProgressColors>;
  size?: DynamicStringEnumKeysOf<FlowbiteProgressSizes>;
  labelProgress?: boolean;
  labelText?: boolean;
  textLabel?: string;
  theme?: DeepPartial<FlowbiteProgressTheme>;
}

export const Progress: FC<ProgressProps> = ({
  className,
  color = "cyan",
  labelProgress = false,
  labelText = false,
  progress,
  size = "md",
  textLabel = "progressbar",
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().progress, customTheme);

  return (
    <div data-testid="flowbite-progress" {...props}>
      {(textLabel && labelText) || (progress > 0 && labelProgress) ? (
        <div className={theme.label}>
          <span>{labelText && textLabel}</span>
          {labelProgress && <span>{progress}%</span>}
        </div>
      ) : null}
      <div className={twMerge(theme.base, theme.size[size], className)}>
        <div
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-label={textLabel}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className={twMerge(theme.bar, theme.color[color], theme.size[size])}
        >
          {progress > 0 && labelProgress ? null : null}
        </div>
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
