import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const slideDown = {
  hidden: {
    opacity: 0,
    y: -30, // Start off-screen
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const DownloadResume = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Set timeout to show header after 10 seconds
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 10000);

    // Clean up timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showHeader && (
        <motion.header
          className={styles.resume}
          variants={slideDown}
          initial="hidden"
          animate="visible"
        >
          <h4>Download resume</h4>
        </motion.header>
      )}
    </>
  );
};

export default DownloadResume;
