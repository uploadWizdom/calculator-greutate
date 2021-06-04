import * as React from "react";
import logo from "../../../images/logo-insmc-1-cropped.png";

const style = require("./footer.module.scss");

export const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.inner}>
        <div className={style.column}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.column}>
          <ul className={style.linksList}>
            <li className={style.linkElement}>
              <a href="https://www.insmc.ro/blog/" className={style.link}>
                Informare
              </a>
            </li>
            <li className={style.linkElement}>
              <a href="https://www.insmc.ro/despre-noi/" className={style.link}>
                Despre noi
              </a>
            </li>
            <li className={style.linkElement}>
              <a href="/" className={style.link}>
                Puncte forte INSMC
              </a>
            </li>
            <li className={style.linkElement}>
              <a href="/" className={style.link}>
                Cauta Medici
              </a>
            </li>
            <li className={style.linkElement}>
              <a href="/" className={style.link}>
                Analize Medicale
              </a>
            </li>
            <li className={style.linkElement}>
              <a href="https://www.insmc.ro/contact/" className={style.link}>
                Contact
              </a>
            </li>
            <li className={style.linkElement}>
              <a href="/" className={style.link}>
                GDPR
              </a>
            </li>
          </ul>
        </div>
        <div className={style.column}>
          <ul className={style.linksList}>
            <li className={style.linkElement}>
              <a href="/" className={style.link}>
                Instituții
              </a>
            </li>
          </ul>
        </div>
        <div className={style.column}>
          <div className={style.phoneLinkContainer}>
            <a href="tel:0219365" className={style.phoneLink}>
              021 93 65
            </a>
          </div>

          <h4 className={style.subPhoneText}>
            Pentru programari solicitați operatorului specialitatea dorită sau
            alegeți din ramurile predefinite.
          </h4>

          <button className={style.contactBtn}>Contact</button>
        </div>
      </div>
    </footer>
  );
};
