import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const SingleProject = ({ index, title, manageModal, src, color }) => {
  // Define animation variants for left and right animations with delay
  const variants = {
    initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1, // Adds a delay for each subsequent project
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className={styles.single}
        initial="initial"
        whileInView="inView"
        variants={variants}
        viewport={{ amount: 0.3 }} //can add once true for one time only... triggers animation when 30% of the component is in view
      >
        <div
          onMouseEnter={(e) => {
            manageModal(true, index, e.clientX, e.clientY);
          }}
          onMouseLeave={(e) => {
            manageModal(false, index, e.clientX, e.clientY);
          }}
          className={styles.project}
        >
          <div className={styles.modalContainer}>
            <motion.div
              className={styles.modal}
              style={{ backgroundColor: color }}
            >
              <img src={src} alt="img" />
            </motion.div>
          </div>
          <div className={styles.text}>
            <h2>{title}</h2>
            <div className={styles.designAndYear}>
              <p>Design & Development</p>
              <p>2024</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProject;
