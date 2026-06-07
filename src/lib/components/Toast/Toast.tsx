"use client";

import type { ComponentProps, FC } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { ToastContext } from "./ToastContext";
import type { FlowbiteToastToggleTheme } from "./ToastToggle";
import { ToastToggle } from "./ToastToggle";

export interface FlowbiteToastTheme {
  root: {
    base: string;
    closed: string;
  };
  toggle: FlowbiteToastToggleTheme;
}

export interface ToastProps extends ComponentProps<"div"> {
  duration?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
  theme?: DeepPartial<FlowbiteToastTheme>;
}

const durationClasses: Record<number, string> = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1000: "duration-1000",
};

export const Toast: FC<ToastProps> = ({ children, className, duration = 300, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().toast, customTheme);

  const [isClosing, setIsClosing] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) {
    return null;
  }

  return (
    <ToastContext.Provider value={{ theme, duration, isClosing, isRemoved, setIsClosing }}>
      <div
        data-testid="flowbite-toast"
        onAnimationEnd={() => {
          if (isClosing) {
            setIsRemoved(true);
          }
        }}
        role="alert"
        className={twMerge(
          theme.root.base,
          durationClasses[duration],
          "transition-opacity",
          isClosing && theme.root.closed,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </ToastContext.Provider>
  );
};

Toast.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";

export const ToastWithToggle = Object.assign(Toast, {
  Toggle: ToastToggle,
});
