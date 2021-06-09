import classNames from "classnames";
import React, { FunctionComponent } from "react";

export const Nav: FunctionComponent<{ style: any }> = ({ style }) => {
  return (
    <nav className={style.nav}>
      <a href="" className={style.navCard}>
        <div className={classNames(style.navCardIcon, style.campaign)} />
        <h3 className={style.navCardText}>Despre Campanie</h3>
      </a>
      <a href="" className={style.navCard}>
        <div className={classNames(style.navCardIcon, style.obesity)} />
        <h3 className={style.navCardText}>Despre Obezitate</h3>
      </a>
      <a href="" className={style.navCard}>
        <div className={classNames(style.navCardIcon, style.weightCalc)} />
        <h3 className={style.navCardText}>Calculator Greutate</h3>
      </a>
      <a href="" className={style.navCard}>
        <div className={classNames(style.navCardIcon, style.guide)} />
        <h3 className={style.navCardText}>Ghidul Părintelui</h3>
      </a>
      <a href="https://www.insmc.ro/contact/" className={style.navCard}>
        <div className={classNames(style.navCardIcon, style.contact)} />
        <h3 className={style.navCardText}>Contact</h3>
      </a>
    </nav>
  );
};
