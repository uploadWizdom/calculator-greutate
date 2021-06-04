import classNames from "classnames";
import * as React from "react";

const style = require("./imageTextCard.module.scss");

export const ImageTextCard = ({ imageUrl, text, isSwitched }) => {
  return (
    <div
      className={classNames(style.container, { [style.switched]: isSwitched })}
    >
      <img src={imageUrl} className={style.image} />

      <div className={style.text}>{text}</div>
    </div>
  );
};
