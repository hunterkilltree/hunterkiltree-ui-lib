"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { useDropdownContext } from "./DropdownContext";

export type DropdownHeaderProps = ComponentProps<"div">;

export const DropdownHeader: FC<DropdownHeaderProps> = ({ children, className, ...props }) => {
  const { theme } = useDropdownContext();

  return (
    <div
      role="presentation"
      data-testid="flowbite-dropdown-header"
      className={twMerge(theme.floating.header, className)}
      {...props}
    >
      {children}
    </div>
  );
};
