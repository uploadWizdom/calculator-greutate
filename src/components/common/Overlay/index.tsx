import classNames from "classnames";
import React, { FunctionComponent } from "react";

const styles = require("./overlay.module.scss");

interface IOverlayProps {
  onClose?: any;
  type?: "white" | "black";
}

export const Overlay: FunctionComponent<IOverlayProps> = ({
  onClose,
  type = "black",
}) => (
  <div
    className={classNames([
      styles.overlay,
      type === "white" ? styles.whiteOverlay : null,
    ])}
    onClick={onClose}
  />
);
