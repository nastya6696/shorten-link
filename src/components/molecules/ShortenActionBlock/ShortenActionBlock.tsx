import React from "react";

import { Button } from "../../atoms";

import styles from "./styles.module.scss";

export const ShortenActionBlock: React.FC = () => (
  <section className={styles.shortenActionBlock}>
    <input type={"url"} id={styles.fullLink} name="fullLink" placeholder="Shorten a link here..."/>
    <Button label="Shorten it!" className={styles.shortenBtn} />
  </section>
)
