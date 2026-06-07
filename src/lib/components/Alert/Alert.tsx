"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import { HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteColors } from "../Flowbite";

export interface FlowbiteAlertTheme {
  base: string;
  borderAccent: string;
  closeButton: FlowbiteAlertCloseButtonTheme;
  color: FlowbiteAlertColors;
  icon: string;
  rounded: string;
  wrapper: string;
}

export interface FlowbiteAlertColors
  extends Pick<FlowbiteColors, "info" | "gray" | "failure" | "success" | "warning"> {
  [key: string]: string;
}

export interface FlowbiteAlertCloseButtonTheme {
  base: string;
  icon: string;
  color: FlowbiteAlertColors;
}

export interface AlertProps extends Omit<ComponentProps<"div">, "color"> {
  additionalContent?: ReactNode;
  color?: DynamicStringEnumKeysOf<FlowbiteAlertColors>;
  icon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
  rounded?: boolean;
  withBorderAccent?: boolean;
  theme?: DeepPartial<FlowbiteAlertTheme>;
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  className,
  color = "info",
  icon: Icon,
  onDismiss,
  rounded = true,
  withBorderAccent,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().alert, customTheme);

  return (
    <div
      className={twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className,
      )}
      role="alert"
      data-testid="flowbite-alert"
      {...props}
    >
      <div className={theme.wrapper} data-testid="flowbite-alert-wrapper">
        {Icon && <Icon className={theme.icon} data-testid="flowbite-alert-icon" />}
        <div>{children}</div>
        {typeof onDismiss === "function" && (
          <button
            aria-label="Dismiss"
            className={twMerge(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={onDismiss}
            type="button"
          >
            <HiX aria-hidden className={theme.closeButton.icon} />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};

Alert.displayName = "Alert";
