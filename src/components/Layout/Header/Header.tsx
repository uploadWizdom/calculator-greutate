import classNames from "classnames";
import React, { FunctionComponent } from "react";

const logo = require("../../../images/logo-insmc-1-cropped.png").default;
const heroBanner = require("../../../images/a.png").default;

const downloadNowImage = require("../../../images/b.png").default;

const style = require("./header.module.scss");

export const Header: FunctionComponent = () => {
  return (
    <header className={style.container}>
      <div className={style.top}>
        <a href="http://www.insmc.ro/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className={style.hero}>
        <img className={style.heroImage} src={heroBanner} />
        <div className={style.downloadNowContainer}>
          <a href="" className={style.downloadNowLink}>
            <img src={downloadNowImage} className={style.downloadNow} />
          </a>
        </div>
      </div>

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
    </header>
  );
};
