"use client";

import type { ComponentProps, FC } from "react";
import { useEffect, useId } from "react";
import { HiOutlineX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useModalContext } from "./ModalContext";

export interface FlowbiteModalHeaderTheme {
  base: string;
  popup: string;
  title: string;
  close: {
    base: string;
    icon: string;
  };
}

export interface ModalHeaderProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteModalHeaderTheme>;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const { theme: rootTheme, popup, onClose, setHeaderId } = useModalContext();
  const theme = mergeDeep(rootTheme.header, customTheme);

  useEffect(() => {
    setHeaderId(id);
    return () => setHeaderId(undefined);
  }, [id, setHeaderId]);

  return (
    <div
      data-testid="flowbite-modal-header"
      className={twMerge(theme.base, popup && theme.popup, className)}
      {...props}
    >
      <h3 id={id} className={theme.title}>
        {children}
      </h3>
      {onClose && (
        <button
          aria-label="Close"
          className={theme.close.base}
          type="button"
          onClick={onClose}
        >
          <HiOutlineX aria-hidden className={theme.close.icon} />
        </button>
      )}
    </div>
  );
};
