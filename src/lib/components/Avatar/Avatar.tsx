"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteColors, FlowbitePositions, FlowbiteSizes } from "../Flowbite";

export interface FlowbiteAvatarTheme {
  root: FlowbiteAvatarRootTheme;
}

export interface FlowbiteAvatarRootTheme {
  base: string;
  bordered: string;
  rounded: string;
  color: FlowbiteAvatarColors;
  img: {
    base: string;
    off: string;
    on: string;
    placeholder: string;
  };
  initials: {
    text: string;
    base: string;
  };
  size: FlowbiteAvatarSizes;
  stacked: string;
  status: FlowbiteAvatarStatus;
  statusPosition: FlowbitePositions;
}

export interface FlowbiteAvatarColors
  extends Pick<FlowbiteColors, "dark" | "failure" | "gray" | "info" | "purple" | "success" | "warning" | "pink"> {
  [key: string]: string;
}

export interface FlowbiteAvatarSizes extends Pick<FlowbiteSizes, "xs" | "sm" | "md" | "lg" | "xl"> {
  [key: string]: string;
}

export interface FlowbiteAvatarStatus {
  away: string;
  base: string;
  busy: string;
  offline: string;
  online: string;
}

export interface AvatarProps extends Omit<ComponentProps<"div">, "color"> {
  alt?: string;
  bordered?: boolean;
  img?: string;
  color?: DynamicStringEnumKeysOf<FlowbiteAvatarColors>;
  rounded?: boolean;
  size?: DynamicStringEnumKeysOf<FlowbiteAvatarSizes>;
  stacked?: boolean;
  status?: "away" | "busy" | "offline" | "online";
  statusPosition?: keyof FlowbitePositions;
  placeholderInitials?: string;
  theme?: DeepPartial<FlowbiteAvatarTheme>;
}

export const Avatar: FC<AvatarProps> = ({
  alt = "",
  bordered = false,
  children,
  className,
  color = "gray",
  img,
  placeholderInitials = "",
  rounded = false,
  size = "md",
  stacked = false,
  status,
  statusPosition = "top-left",
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar, customTheme);

  const imgClassName = twMerge(
    theme.root.img.base,
    bordered && theme.root.bordered,
    bordered && theme.root.color[color],
    rounded && theme.root.rounded,
    stacked && theme.root.stacked,
    theme.root.size[size],
  );

  return (
    <div className={twMerge(theme.root.base, className)} data-testid="flowbite-avatar" {...props}>
      <div className="relative">
        {img ? (
          <img alt={alt} className={imgClassName} src={img} data-testid="flowbite-avatar-img" />
        ) : placeholderInitials ? (
          <div
            className={twMerge(
              theme.root.img.off,
              theme.root.initials.base,
              rounded && theme.root.rounded,
              bordered && theme.root.bordered,
              bordered && theme.root.color[color],
              stacked && theme.root.stacked,
              theme.root.size[size],
            )}
            data-testid="flowbite-avatar-initials-placeholder"
          >
            <span className={theme.root.initials.text} data-testid="flowbite-avatar-initials-placeholder-text">
              {placeholderInitials}
            </span>
          </div>
        ) : (
          <div className={twMerge(imgClassName, theme.root.img.off)} data-testid="flowbite-avatar-img">
            <svg className={theme.root.img.placeholder} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        {status && (
          <span
            data-testid="flowbite-avatar-status"
            className={twMerge(theme.root.status[status], theme.root.statusPosition[statusPosition], theme.root.status.base)}
          />
        )}
      </div>
      {children as ReactNode}
    </div>
  );
};

Avatar.displayName = "Avatar";
