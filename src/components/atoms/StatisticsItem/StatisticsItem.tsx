import React from "react";

import styles from "./styles.module.scss";

export interface StatisticsItemProps {
  title: string,
  description: string,
  icon: string,
}

export const StatisticsItem: React.FC<StatisticsItemProps> = ({title, description, icon}) => (
  <div className={styles.statisticItem}>
    <div className={styles.icon}>
      <img src={icon} alt={icon} />
    </div>
    <h4 className={styles.title}>{title}</h4>
    <p className={styles.description}>{description}</p>
  </div>
)
