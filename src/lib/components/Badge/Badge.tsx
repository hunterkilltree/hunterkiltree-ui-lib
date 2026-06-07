"use client";

import type { ComponentProps, FC, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteColors } from "../Flowbite";

export interface FlowbiteBadgeTheme {
  root: FlowbiteBadgeRootTheme;
  icon: FlowbiteBadgeIconTheme;
}

export interface FlowbiteBadgeRootTheme {
  base: string;
  color: FlowbiteBadgeColors;
  href: string;
  size: FlowbiteBadgeSizes;
}

export interface FlowbiteBadgeIconTheme {
  off: string;
  on: string;
  size: FlowbiteBadgeSizes;
}

export interface FlowbiteBadgeColors
  extends Pick<FlowbiteColors, "info" | "gray" | "failure" | "success" | "warning" | "indigo" | "purple" | "pink"> {
  [key: string]: string;
}

export interface FlowbiteBadgeSizes {
  xs: string;
  sm: string;
  [key: string]: string;
}

export interface BadgeProps extends Omit<ComponentProps<"span">, "color"> {
  color?: DynamicStringEnumKeysOf<FlowbiteBadgeColors>;
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
  size?: DynamicStringEnumKeysOf<FlowbiteBadgeSizes>;
  theme?: DeepPartial<FlowbiteBadgeTheme>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = "info",
  icon: Icon,
  size = "xs",
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().badge, customTheme);

  const Content = (): ReactElement => (
    <span
      className={twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.icon[Icon ? "on" : "off"],
        className,
      )}
      data-testid="flowbite-badge"
      {...props}
    >
      {Icon && <Icon aria-hidden className={twMerge(theme.icon.size[size])} data-testid="flowbite-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};

Badge.displayName = "Badge";
