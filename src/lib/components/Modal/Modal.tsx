"use client";

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import type { ComponentProps, FC, MutableRefObject } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from "../Flowbite";
import type { FlowbiteModalBodyTheme } from "./ModalBody";
import { ModalBody } from "./ModalBody";
import { ModalContext } from "./ModalContext";
import type { FlowbiteModalFooterTheme } from "./ModalFooter";
import { ModalFooter } from "./ModalFooter";
import type { FlowbiteModalHeaderTheme } from "./ModalHeader";
import { ModalHeader } from "./ModalHeader";

export interface FlowbiteModalTheme {
  root: FlowbiteModalRootTheme;
  content: FlowbiteModalContentTheme;
  body: FlowbiteModalBodyTheme;
  header: FlowbiteModalHeaderTheme;
  footer: FlowbiteModalFooterTheme;
}

export interface FlowbiteModalRootTheme {
  base: string;
  show: FlowbiteBoolean;
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface FlowbiteModalContentTheme {
  base: string;
  inner: string;
}

export interface ModalPositions extends FlowbitePositions {
  [key: string]: string;
}

export interface ModalSizes extends Omit<FlowbiteSizes, "xs"> {
  [key: string]: string;
}

export interface ModalProps extends ComponentProps<"div"> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
  dismissible?: boolean;
  theme?: DeepPartial<FlowbiteModalTheme>;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
}

const ModalComponent: FC<ModalProps> = ({
  children,
  className,
  dismissible = false,
  onClose,
  popup,
  position = "center",
  root,
  show,
  size = "2xl",
  theme: customTheme = {},
  initialFocus,
  ...props
}) => {
  const [headerId, setHeaderId] = useState<string | undefined>(undefined);
  const theme = mergeDeep(getTheme().modal, customTheme);

  const { context, refs } = useFloating({
    open: show,
    onOpenChange: (isOpen) => {
      if (!isOpen) {
        onClose?.();
      }
    },
  });

  const role = useRole(context);
  const dismiss = useDismiss(context, { enabled: dismissible, outsidePressEvent: "mousedown" });
  const { getFloatingProps } = useInteractions([role, dismiss]);

  if (!show) {
    return null;
  }

  return (
    <ModalContext.Provider value={{ theme, popup, onClose, setHeaderId }}>
      <FloatingPortal root={root}>
        <FloatingOverlay
          lockScroll
          data-testid="modal-overlay"
          className={twMerge(
            theme.root.base,
            theme.root.positions[position],
            theme.root.show.on,
            className,
          )}
        >
          <FloatingFocusManager context={context} initialFocus={initialFocus}>
            <div
              ref={refs.setFloating}
              {...getFloatingProps(props)}
              aria-labelledby={headerId}
              aria-modal
              role="dialog"
              data-testid="flowbite-modal"
              className={twMerge(theme.content.base, theme.root.sizes[size])}
            >
              <div className={theme.content.inner}>{children}</div>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    </ModalContext.Provider>
  );
};

ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
