import React from "react";
import Transition from "../Layout/PageTransition/Transition";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.7 },
  },
};

const About = () => {
  return (
    <>
      <Transition>
        <motion.main
          className={styles.about}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          <div className={styles.landingText}>
            <h2 className={styles.education}>
              *10th → Diploma(CSE) → BTech(CSE)*
            </h2>
            <h2>Interaction</h2>
            <div className={styles.h2andp}>
              <h2>developer</h2>
              <p>inspired by</p>
            </div>
            <h2 className={styles.beauty}>The Beauty </h2>
            <h2 className={styles.nature}>
              <p>of</p> Nature
            </h2>
          </div>
        </motion.main>
      </Transition>
    </>
  );
};

export default About;
