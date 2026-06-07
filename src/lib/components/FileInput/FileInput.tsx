import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from "../Flowbite";
import { HelperText } from "../HelperText";

export interface FlowbiteFileInputTheme {
  base: string;
  sizes: FlowbiteFileInputSizes;
  colors: FlowbiteFileInputColors;
  withShadow: FlowbiteBoolean;
}

export interface FlowbiteFileInputColors
  extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface FlowbiteFileInputSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface FileInputProps extends Omit<ComponentProps<"input">, "ref" | "color" | "type"> {
  color?: DynamicStringEnumKeysOf<FlowbiteFileInputColors>;
  helperText?: ReactNode;
  shadow?: boolean;
  sizing?: DynamicStringEnumKeysOf<FlowbiteFileInputSizes>;
  theme?: DeepPartial<FlowbiteFileInputTheme>;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, color = "gray", helperText, shadow, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().fileInput, customTheme);

    return (
      <>
        <input
          ref={ref}
          type="file"
          data-testid="flowbite-file-input"
          className={twMerge(
            theme.base,
            theme.colors[color],
            theme.sizes[sizing],
            theme.withShadow[shadow ? "on" : "off"],
            className,
          )}
          {...props}
        />
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

FileInput.displayName = "FileInput";
