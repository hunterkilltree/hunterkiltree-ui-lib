"use client";

import { createContext, useContext } from "react";

export type ToastContextValue = {
  theme: import("./Toast").FlowbiteToastTheme;
  duration?: number;
  isClosing: boolean;
  isRemoved: boolean;
  setIsClosing: (isClosing: boolean) => void;
};

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToastContext(): ToastContextValue {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext should be used within the Toast component!");
  }

  return context;
}
