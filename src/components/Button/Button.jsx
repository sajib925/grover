import React from "react";
import * as s from "./Button.module.scss";
import { Link } from 'react-router-dom';

function Button({url, variant, text}) {
  return (
    <Link
      to={url}
      className={
        variant === "outline"
          ? `${s.btn} ${s.outline__btn}`
          : `${s.btn} ${s.primary__btn}`
      }
    >
      {text}
    </Link>
  );
}

export default Button;
