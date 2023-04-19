import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export enum ButtonShape {
  Round = "round",
  Square = "square",
}

interface ButtonProps {
  label: string,
  isClicked?: boolean,
  shape?: ButtonShape,
  className?: string,
}

export const Button:React.FC<ButtonProps> = ({
  label,
  isClicked = false,
  shape = ButtonShape.Square,
  className= ''
}) => (
  <button className={classNames(
    styles.commonButton,
    { [className]: className },
    { [styles.clicked]: isClicked},
    { [styles[shape]]: shape })}
  >
    {label}
  </button>
)
