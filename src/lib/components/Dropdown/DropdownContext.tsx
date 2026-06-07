"use client";

import { createContext, useContext } from "react";
import type { FlowbiteDropdownTheme } from "./Dropdown";

export type DropdownContextValue = {
  theme: FlowbiteDropdownTheme;
  activeIndex: number | null;
  dismissOnClick: boolean;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  handleSelect: (index: number | null) => void;
};

export const DropdownContext = createContext<DropdownContextValue | undefined>(undefined);

export function useDropdownContext(): DropdownContextValue {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdownContext should be used within the Dropdown component!");
  }

  return context;
}
