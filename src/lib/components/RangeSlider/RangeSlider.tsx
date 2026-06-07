import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";

export interface FlowbiteRangeSliderTheme {
  root: {
    base: string;
  };
  field: {
    base: string;
    input: {
      base: string;
      sizes: FlowbiteRangeSliderSizes;
    };
  };
}

export interface FlowbiteRangeSliderSizes {
  sm: string;
  md: string;
  lg: string;
  [key: string]: string;
}

export interface RangeSliderProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  sizing?: DynamicStringEnumKeysOf<FlowbiteRangeSliderSizes>;
  theme?: DeepPartial<FlowbiteRangeSliderTheme>;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().rangeSlider, customTheme);

    return (
      <div className={theme.root.base} data-testid="flowbite-range-slider">
        <div className={theme.field.base}>
          <input
            ref={ref}
            type="range"
            className={twMerge(theme.field.input.base, theme.field.input.sizes[sizing], className)}
            {...props}
          />
        </div>
      </div>
    );
  },
);

RangeSlider.displayName = "RangeSlider";
