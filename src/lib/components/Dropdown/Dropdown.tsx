"use client";

import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import type { Placement } from "@floating-ui/react";
import type { FC, ReactElement, ReactNode } from "react";
import { cloneElement, useCallback, useMemo, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import { Button } from "../Button";
import type { FlowbiteColors } from "../Flowbite";
import { DropdownContext } from "./DropdownContext";
import type { DropdownContextValue } from "./DropdownContext";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownHeader } from "./DropdownHeader";
import type { FlowbiteDropdownItemTheme } from "./DropdownItem";
import { DropdownItem } from "./DropdownItem";

export interface FlowbiteDropdownFloatingTheme {
  base: string;
  hidden: string;
  item: FlowbiteDropdownItemTheme;
  header: string;
  divider: string;
}

export interface FlowbiteDropdownTheme {
  arrowIcon: string;
  content: string;
  inlineWrapper: string;
  floating: FlowbiteDropdownFloatingTheme;
}

export interface DropdownProps {
  label?: ReactNode;
  placement?: Placement;
  dismissOnClick?: boolean;
  arrowIcon?: boolean;
  renderTrigger?: (theme: FlowbiteDropdownTheme) => ReactElement;
  children?: ReactNode;
  className?: string;
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  size?: string;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteDropdownTheme>;
}

const DropdownComponent: FC<DropdownProps> = ({
  label,
  placement = "bottom-start",
  dismissOnClick = true,
  arrowIcon = true,
  renderTrigger,
  children,
  className,
  theme: customTheme = {},
  ...buttonProps
}) => {
  const theme = mergeDeep(getTheme().dropdown, customTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offset(4), flip({ padding: 8 }), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: isOpen ? setActiveIndex : undefined,
    enabled: isOpen,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    dismiss,
    role,
    listNavigation,
    typeahead,
  ]);

  const handleSelect = useCallback((index: number | null) => {
    setActiveIndex(index);
    if (index === null) {
      setIsOpen(false);
    }
  }, []);

  const contextValue = useMemo<DropdownContextValue>(
    () => ({ theme, activeIndex, dismissOnClick, getItemProps, handleSelect }),
    [theme, activeIndex, dismissOnClick, getItemProps, handleSelect],
  );

  return (
    <>
      {renderTrigger ? (
        cloneElement(renderTrigger(theme), {
          ref: refs.setReference,
          ...getReferenceProps(),
        })
      ) : (
        <Button
          ref={refs.setReference}
          className={className}
          data-testid="flowbite-dropdown-target"
          {...buttonProps}
          {...getReferenceProps()}
        >
          {label}
          {arrowIcon && <HiOutlineChevronDown className={theme.arrowIcon} aria-hidden />}
        </Button>
      )}
      <DropdownContext.Provider value={contextValue}>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div
                  ref={refs.setFloating}
                  data-testid="flowbite-dropdown"
                  className={twMerge(theme.floating.base)}
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  <div className={theme.content} role="none">
                    {children}
                  </div>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </DropdownContext.Provider>
    </>
  );
};

DropdownComponent.displayName = "Dropdown";
DropdownItem.displayName = "Dropdown.Item";
DropdownHeader.displayName = "Dropdown.Header";
DropdownDivider.displayName = "Dropdown.Divider";

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
});
