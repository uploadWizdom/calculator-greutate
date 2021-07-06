import React, { FunctionComponent } from "react";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Nav } from "./Nav/Nav";

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

        <MobileMenu />
      </div>

      <div className={style.hero}>
        <img className={style.heroImage} src={heroBanner} />
        <div className={style.downloadNowContainer}>
          <a
            href="/assets/Brosura_finala.pdf"
            className={style.downloadNowLink}
            target="_blank"
          >
            <img src={downloadNowImage} className={style.downloadNow} />
          </a>
        </div>
      </div>

      <Nav style={style} />
    </header>
  );
};
