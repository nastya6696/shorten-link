import React from "react";
import { Button } from "../../atoms";
import { ButtonShape } from "../../atoms/Button/Button";

import styles from './styles.module.scss';

interface BoostYourLinksBlockProps {
  title: string,
  buttonLabel: string,
}

export const BoostYourLinksBlock: React.FC<BoostYourLinksBlockProps> = ({title, buttonLabel}) => (
  <div className={styles.boostYourLinksBlock}>
    <h3 className={styles.title}>{title}</h3>
    <Button className={styles.button} label={buttonLabel} shape={ButtonShape.Round} />
  </div>
);
