import React from "react";

import styles from "./Hero.module.css";
import austinImage from "./austin.png";
import resumePDF from "./austin.pdf"; // Assuming the PDF is in the same folder

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Austin Casquejo</h1>
        <p className={styles.description}>
          I'm a skilled undergraduate developer. Reach out if you'd like to
          learn more!
        </p>
        <a
          href={resumePDF}
          download="Austin_Casquejo_Resume.pdf"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <img
        src={austinImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
