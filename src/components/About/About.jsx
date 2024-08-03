import React from "react";
import Transition from "../Layout/PageTransition/Transition";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <>
      <Transition>
        <section className={styles.about}>
          <h1>About Page is under processing...</h1>
        </section>
      </Transition>
    </>
  );
};

export default About;
