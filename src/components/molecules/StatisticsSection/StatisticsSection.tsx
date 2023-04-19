import React from "react";

import { statisticsItems } from "../../atoms/StatisticsItem/data";
import { LayoutContainer, StatisticsItem } from "../../atoms";

import styles from "./styles.module.scss";

export const StatisticsSection: React.FC = () => (
  <LayoutContainer className={styles.layoutContainer}>
    <h3 className={styles.title}>Advanced Statistics</h3>
    <p className={styles.description}>
      Track how your links are performing across the web with our advanced statistics dashboard.
    </p>
    <section className={styles.statisticsSection}>
      {
        statisticsItems.map(item =>
            <StatisticsItem title={item.title} description={item.description} icon={item.icon} />
        )
      }
    </section>
  </LayoutContainer>
)
