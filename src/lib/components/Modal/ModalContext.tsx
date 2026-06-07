"use client";

import { createContext, useContext } from "react";
import type { FlowbiteModalTheme } from "./Modal";

export type ModalContextType = {
  theme: FlowbiteModalTheme;
  popup?: boolean;
  onClose?: () => void;
  setHeaderId: (id: string | undefined) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext should be used within the Modal component!");
  }

  return context;
}
