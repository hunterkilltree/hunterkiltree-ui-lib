"use client";

import type { ComponentProps, FC, KeyboardEvent } from "react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors } from "../Flowbite";

export interface FlowbiteToggleSwitchTheme {
  root: FlowbiteToggleSwitchRootTheme;
  toggle: FlowbiteToggleSwitchToggleTheme;
}

export interface FlowbiteToggleSwitchRootTheme {
  base: string;
  active: FlowbiteBoolean;
  label: string;
}

export interface FlowbiteToggleSwitchToggleTheme {
  base: string;
  checked: FlowbiteBoolean & { color: FlowbiteToggleSwitchColors };
  sizes: FlowbiteToggleSwitchSizes;
}

export interface FlowbiteToggleSwitchColors
  extends Pick<
    FlowbiteColors,
    "blue" | "dark" | "failure" | "gray" | "green" | "info" | "purple" | "success" | "warning"
  > {
  [key: string]: string;
}

export interface FlowbiteToggleSwitchSizes {
  sm: string;
  md: string;
  lg: string;
  [key: string]: string;
}

export interface ToggleSwitchProps extends Omit<ComponentProps<"button">, "onChange" | "ref" | "color"> {
  checked: boolean;
  color?: DynamicStringEnumKeysOf<FlowbiteToggleSwitchColors>;
  sizing?: DynamicStringEnumKeysOf<FlowbiteToggleSwitchSizes>;
  label?: string;
  onChange: (checked: boolean) => void;
  theme?: DeepPartial<FlowbiteToggleSwitchTheme>;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  className,
  color = "blue",
  sizing = "md",
  disabled,
  label,
  name,
  onChange,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().toggleSwitch, customTheme);
  const id = useId();

  function handleClick(): void {
    onChange(!checked);
  }

  function handleOnKeyDown(event: KeyboardEvent<HTMLButtonElement>): void {
    if (event.code === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <>
      {name && checked && (
        <input checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only" />
      )}
      <button
        aria-checked={checked}
        aria-labelledby={`${id}-flowbite-toggleswitch-label`}
        disabled={disabled}
        id={`${id}-flowbite-toggleswitch`}
        onClick={handleClick}
        onKeyDown={handleOnKeyDown}
        role="switch"
        tabIndex={0}
        type="button"
        data-testid="flowbite-toggleswitch"
        className={twMerge(theme.root.base, theme.root.active[disabled ? "off" : "on"], className)}
        {...props}
      >
        <div
          data-testid="flowbite-toggleswitch-toggle"
          className={twMerge(
            theme.toggle.base,
            theme.toggle.checked[checked ? "on" : "off"],
            !disabled && checked && theme.toggle.checked.color[color],
            theme.toggle.sizes[sizing],
          )}
        />
        {label?.length ? (
          <span
            data-testid="flowbite-toggleswitch-label"
            id={`${id}-flowbite-toggleswitch-label`}
            className={theme.root.label}
          >
            {label}
          </span>
        ) : null}
      </button>
    </>
  );
};

ToggleSwitch.displayName = "ToggleSwitch";
