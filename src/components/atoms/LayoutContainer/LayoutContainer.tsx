import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface LayoutContainerProps {
  children: React.ReactNode,
  className?: string,
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  className = '',
}) => (
  <div className={classNames(styles.layoutContainer, { [className]: className })}>
    {children}
  </div>
)

