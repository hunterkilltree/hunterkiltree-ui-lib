"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { useDropdownContext } from "./DropdownContext";

export type DropdownDividerProps = ComponentProps<"div">;

export const DropdownDivider: FC<DropdownDividerProps> = ({ className, ...props }) => {
  const { theme } = useDropdownContext();

  return (
    <div
      role="separator"
      data-testid="flowbite-dropdown-divider"
      className={twMerge(theme.floating.divider, className)}
      {...props}
    />
  );
};
