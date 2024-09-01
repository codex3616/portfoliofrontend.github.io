import React from "react";
import styles from "./styles.module.scss";
import pin from "../../../images/pin.gif";
// import sketch from "../../../images/sketchh.JPEG";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const LandingText = () => {
  const { scrollYProgress } = useScroll();

  const springTransition = {
    type: "spring",
    damping: 100,
    stiffness: 300,
    mass: 0.3,
  };

  // Horizontal and Vertical Transforms for Name div (moves left and up)
  const horizontalLeft = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springTransition
  );
  const verticalLeft = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -150]),
    springTransition
  );

  // Horizontal and Vertical Transforms for Software h2 (moves right and up)
  const horizontalRight = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    springTransition
  );
  const verticalRight = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -150]),
    springTransition
  );

  return (
    <main className={styles.main}>
      <div className={styles.landingText}>
        {/* Name Animation */}
        <motion.div
          className={styles.name}
          initial={{ x: "50vw", opacity: 0 }} // Start from center right
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ ...springTransition, duration: 0.5, delay: 0.5 }} // Animation settings
        >
          {/* <img src={sketch} alt="sketch" /> */}
          <motion.h2
            style={{
              x: horizontalLeft,
              y: verticalLeft,
            }}
          >
            Akash Singh
          </motion.h2>
        </motion.div>

        {/* Software Animation */}
        <motion.div
          initial={{ x: "-50vw", opacity: 0 }} // Start from center left
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ ...springTransition, duration: 0.5, delay: 1.2 }} // Animation settings
        >
          <motion.h2
            className={styles.software}
            style={{
              x: horizontalRight,
              y: verticalRight,
            }}
          >
            Software
          </motion.h2>
        </motion.div>

        {/* Developer Animation */}
        <motion.div
          initial={{ x: "50vw", opacity: 0 }} // Start from center right
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ ...springTransition, duration: 0.5, delay: 1.9 }} // Animation settings
        >
          <motion.h2
            className={styles.developer}
            style={{
              x: horizontalLeft,
              y: verticalLeft,
            }}
          >
            Developer
          </motion.h2>
        </motion.div>

        {/* Delhi Animation */}
        <motion.div
          initial={{ x: "-50vw", opacity: 0 }} // Start from center left
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ ...springTransition, duration: 0.5, delay: 2.6 }} // Animation settings
        >
          <motion.div
            className={styles.delhi}
            style={{
              x: horizontalRight,
              y: verticalRight,
            }}
          >
            <img src={pin} alt="pin" />
            <h2>Delhi</h2>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default LandingText;
