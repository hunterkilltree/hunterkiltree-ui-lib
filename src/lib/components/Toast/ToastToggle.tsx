"use client";

import type { ComponentProps, FC } from "react";
import { HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useToastContext } from "./ToastContext";

export interface FlowbiteToastToggleTheme {
  base: string;
  icon: string;
}

export interface ToastToggleProps extends ComponentProps<"button"> {
  xicon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
  theme?: DeepPartial<FlowbiteToastToggleTheme>;
}

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  xicon: XIcon = HiX,
  onDismiss,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, duration, isClosing, setIsClosing } = useToastContext();
  const theme = mergeDeep(rootTheme.toggle, customTheme);

  return (
    <button
      aria-label="Close"
      onClick={() => {
        if (onDismiss) {
          onDismiss();
          return;
        }
        setIsClosing(!isClosing);
      }}
      type="button"
      data-testid="flowbite-toast-toggle"
      className={twMerge(theme.base, duration && `transition-opacity duration-${duration}`, className)}
      {...props}
    >
      <XIcon aria-hidden className={theme.icon} />
    </button>
  );
};
