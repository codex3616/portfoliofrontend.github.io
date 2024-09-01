import React, { lazy, Suspense } from "react";

import Transition from "../Layout/PageTransition/Transition";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slideUp } from "../anim";
import Loader from "../Layout/loader/Loader";

const LandingText = lazy(() => import("./Landingtext.jsx/LandingText"));
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
          <Suspense fallback={<Loader />}>
            <LandingText />
          </Suspense>
        </motion.main>
      </Transition>
    </>
  );
};

export default About;
