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
        <motion.section
          className={styles.about}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          <h1>About Page is under processing...</h1>
        </motion.section>
      </Transition>
    </>
  );
};

export default About;
