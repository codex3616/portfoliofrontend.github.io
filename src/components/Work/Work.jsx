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
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

const Work = () => {
  return (
    <>
      <Transition>
        <motion.section
          className={styles.work}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          <h1>work Page is under processing...</h1>
        </motion.section>
      </Transition>
    </>
  );
};

export default Work;
