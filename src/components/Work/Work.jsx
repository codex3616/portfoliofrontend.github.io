import React from "react";
import Transition from "../Layout/PageTransition/Transition";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slideUp } from "../anim";

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
