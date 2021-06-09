import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useLockBodyScroll } from "react-use";
import Close from "../../../../icons/Close";
import Hamburger from "../../../../icons/Hamburger";
import { Nav } from "../Nav/Nav";

const style = require("./mobileMenu.module.scss");
const menuNavStyle = require("./menuNav.module.scss");

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<any>(null);

  useLockBodyScroll(isOpen);

  function onIconClick() {
    clearTimeout(timeoutRef.current);

    if (!isOpen) {
      setIsOpen(true);
      timeoutRef.current = setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
      timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
    }
  }

  return (
    <div className={style.container} onClick={onIconClick}>
      {isOpen ? <Close /> : <Hamburger />}

      {isOpen && (
        <div className={classNames(style.menu, { [style.visible]: isVisible })}>
          <Nav style={menuNavStyle} />
        </div>
      )}
    </div>
  );
};
