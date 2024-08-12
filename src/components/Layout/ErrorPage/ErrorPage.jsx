import Transition from "../PageTransition/Transition";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import RoundedButton from "../RoundedButton/RoundedButton";
import { Link } from "react-router-dom";
import backgroundVideo from "../../../images/bgvideo2.mp4";
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
const ErrorPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video automatically when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Transition>
        <motion.section
          className={styles.error}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          <video
            ref={videoRef}
            className={styles.backgroundVideo}
            autoPlay
            loop
            muted
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
          <div className={styles.body}>
            <div className={styles.title}>
              <span>
                <h2>Error 404</h2>
              </span>
              <h2 className={styles.together}>Are you lost ?</h2>
              <div className={styles.buttonContainer}>
                <RoundedButton
                  className={styles.button}
                  backgroundColor="#3c54ea"
                >
                  <Link to="/">
                    <p>Back to home</p>
                  </Link>
                </RoundedButton>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <span>
              <h3>Version</h3>
              <p>{currentYear} © Edition</p>
            </span>
            <span>
              <h3>Local Time</h3>
              <p>{`${currentTime}   `} GMT+05</p>
            </span>
          </div>
        </motion.section>
      </Transition>
    </>
  );
};

export default ErrorPage;
