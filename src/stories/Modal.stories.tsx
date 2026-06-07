import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "../lib/components/Button";
import type { ModalProps } from "../lib/components/Modal";
import { Modal } from "../lib/components/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} show={open} onClose={() => setOpen(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Dismissible = Template.bind({});
Dismissible.args = {
  dismissible: true,
};

export const PopupSmall = Template.bind({});
PopupSmall.storyName = "Popup (sm)";
PopupSmall.args = {
  popup: true,
  size: "sm",
};

export const LargeTopCenter = Template.bind({});
LargeTopCenter.storyName = "Large, top-center";
LargeTopCenter.args = {
  size: "5xl",
  position: "top-center",
};
