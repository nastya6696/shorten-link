import React from "react";

import { Button, LayoutContainer } from "../../atoms";
import { ButtonShape } from "../../atoms/Button/Button";

import styles from './styles.module.scss';

interface BannerProps {
  title: string,
  description: string,
  buttonLabel: string,
}

export const Banner: React.FC<BannerProps> = ({title, description, buttonLabel}) => (
  <LayoutContainer className={styles.bannerLayout}>
    <figure className={styles.bannerImg} />
    <section className={styles.bannerContent}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Button className={styles.getStartedBtn} label={buttonLabel} shape={ButtonShape.Round} />
    </section>
  </LayoutContainer>
);
