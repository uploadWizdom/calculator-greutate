import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Overlay } from "../Overlay";
import { StackedPortal } from "../Portal";

const styles = require("./modal.module.scss");

interface IModalProps {
  open: boolean;
  size?: "medium";
  children: () => ReactNode;
  handleClose: () => void;
}

export const Modal: FunctionComponent<IModalProps> = ({
  open,
  size = "medium",
  children,
  handleClose: closeModal,
}) => {
  const modalSize = styles[size];

  return (
    open && (
      <StackedPortal handleClose={closeModal}>
        <Overlay onClose={closeModal} />

        <div
          className={classNames([
            styles.modalContent,
            styles.modalContentAbsolute,
            modalSize,
          ])}
        >
          <div className={styles.modalContentInner}>
            <div className={styles.modalClose} onClick={closeModal}>
              X
            </div>

            <div className={styles.modalBody}>{children()}</div>
          </div>
        </div>
      </StackedPortal>
    )
  );
};
