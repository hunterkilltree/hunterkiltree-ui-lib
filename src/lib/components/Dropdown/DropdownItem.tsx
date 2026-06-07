"use client";

import { useListItem } from "@floating-ui/react";
import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useDropdownContext } from "./DropdownContext";

export interface FlowbiteDropdownItemTheme {
  base: string;
  icon: string;
}

export interface DropdownItemProps extends Omit<ComponentProps<"button">, "ref"> {
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteDropdownItemTheme>;
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, activeIndex, getItemProps, handleSelect, dismissOnClick } = useDropdownContext();
  const theme = mergeDeep(rootTheme.floating.item, customTheme);

  const { ref, index } = useListItem({
    label: typeof children === "string" ? (children as string) : undefined,
  });
  const isActive = activeIndex === index;

  return (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      tabIndex={isActive ? 0 : -1}
      data-testid="flowbite-dropdown-item"
      className={twMerge(theme.base, className)}
      {...props}
      {...getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          onClick?.(event);
          if (dismissOnClick) {
            handleSelect(null);
          }
        },
      })}
    >
      {Icon && <Icon className={theme.icon} aria-hidden />}
      {children as ReactNode}
    </button>
  );
};
