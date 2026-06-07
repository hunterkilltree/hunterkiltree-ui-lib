import type { ComponentProps, FC, ReactNode } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from "../Flowbite";
import { HelperText } from "../HelperText";

export interface FlowbiteSelectTheme {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    select: {
      base: string;
      withIcon: FlowbiteBoolean;
      withAddon: FlowbiteBoolean;
      withShadow: FlowbiteBoolean;
      sizes: FlowbiteSelectSizes;
      colors: FlowbiteSelectColors;
    };
  };
}

export interface FlowbiteSelectColors
  extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface FlowbiteSelectSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface SelectProps extends Omit<ComponentProps<"select">, "ref" | "color"> {
  addon?: ReactNode;
  color?: DynamicStringEnumKeysOf<FlowbiteSelectColors>;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<"svg">>;
  shadow?: boolean;
  sizing?: DynamicStringEnumKeysOf<FlowbiteSelectSizes>;
  theme?: DeepPartial<FlowbiteSelectTheme>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      addon,
      children,
      className,
      color = "gray",
      helperText,
      icon: Icon,
      shadow,
      sizing = "md",
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().select, customTheme);

    return (
      <>
        <div className={twMerge(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {Icon && (
              <div className={theme.field.icon.base}>
                <Icon className={theme.field.icon.svg} />
              </div>
            )}
            <select
              className={twMerge(
                theme.field.select.base,
                theme.field.select.colors[color],
                theme.field.select.sizes[sizing],
                theme.field.select.withIcon[Icon ? "on" : "off"],
                theme.field.select.withAddon[addon ? "on" : "off"],
                theme.field.select.withShadow[shadow ? "on" : "off"],
              )}
              {...props}
              ref={ref}
            >
              {children}
            </select>
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

Select.displayName = "Select";
