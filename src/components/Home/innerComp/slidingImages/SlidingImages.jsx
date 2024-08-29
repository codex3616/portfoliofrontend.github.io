import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import lazyImage from "./LazyImage";
import UseWindowWidth from "../../../Layout/windowHook/UseWindowWidth";

// Import images
import js from "./img/js.gif";
// import github from "./img/git.PNG";
import reactImg from "./img/react.gif";
import nodeImg from "./img/node.gif";
import expressImg from "./img/express.JPG";
import mongoDbImg from "./img/mongodb.gif";
import restApi from "./img/restapi.JPG";
import python from "./img/python.gif";
import css from "./img/css.JPG";
import cPlusPlus from "./img/c++.JPG";
import html from "./img/html.gif";
import sass from "./img/sass.JPG";
// import git from "./img/git.PNG";
import bootstrap from "./img/bootstrap.JPG";

// Slider data
const slider1 = [sass, restApi, expressImg, html];
const slider2 = [reactImg, js, nodeImg, bootstrap];
const slider3 = [css, cPlusPlus, mongoDbImg, python];

const SlidingImages = () => {
  const container = useRef(null);
  const windowWidth = UseWindowWidth();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    throttle: 30, // Throttle scroll updates
  });

  // Define spring config
  const springConfig = {
    damping: 100, // Higher damping to prevent oscillation
    stiffness: 300, // Stiffer spring for quick, smooth stop
    mass: 0.3, // Lower mass for quicker response
  };

  // Transformations
  const x1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 150]),
    springConfig
  );
  const x2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -250]),
    springConfig
  );
  const x3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );
  const height = useTransform(scrollYProgress, [0, 1], [40, 0], springConfig);
  // const text2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Use requestAnimationFrame for smooth scrolling
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        // You can add additional scroll handling logic here
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.overflow}>
        <main className={styles.main} ref={container}>
          <div className={`${styles.text} ${styles.text1}`}>
            <motion.h3 style={{ y: windowWidth <= 500 ? x1 : x3 }}>
              Start with something simple and small, then expand over time. If
              people call it a 'toy', you're definitely onto something...
            </motion.h3>
          </div>

          <div className={styles.slidingImages}>
            {[slider1, slider2, slider3].map((slider, index) => (
              <motion.div
                key={index}
                style={{ x: [x1, x2, x3][index], willChange: "transform" }}
                className={styles.slider}
              >
                {slider.map((src, idx) => (
                  <div className={styles.skills} key={idx}>
                    <div className={styles.imageContainer}>
                      <img
                        alt={`img-${index}-${idx}`}
                        src={lazyImage(src)} // Lazy load images
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          <div className={`${styles.text} ${styles.text2}`}>
            <motion.h3 style={{ y: x2 }}>
              I am a curious person, living my dream freelance career, and
              keeping an eye on the future...
            </motion.h3>
          </div>
        </main>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </>
  );
};

export default SlidingImages;
