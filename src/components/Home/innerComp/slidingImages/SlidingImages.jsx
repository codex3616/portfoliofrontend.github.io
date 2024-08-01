import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import js from "./img/js.PNG";
import github from "./img/git.PNG";
import reactImg from "./img/react.JPG";
import nodeImg from "./img/node.JPG";
import expressImg from "./img/express.JPG";
import mongoDbImg from "./img/mongodb.JPG";
import restApi from "./img/restapi.JPG";
import python from "./img/python.JPG";
// import arduino from "./img/arduino.JPG";
// import css from "./img/css.JPG";
// import cPlusPlus from "./img/c++.JPG";
import html from "./img/html.JPG";
// import bootstrap from "./img/bootstrap.JPG";
import sass from "./img/sass.JPG";
// import talwind from "./img/talwind.JPG";
// import ui from "./img/ui.JPG";

const slider1 = [
  {
    color: "black",
    src: html,
  },
  {
    color: "#e3e5e7",
    src: reactImg,
  },
  {
    color: "#d6d7dc",
    src: js,
  },

  {
    color: "#e3e3e3",
    src: expressImg,
  },
  {
    color: "#21242b",
    src: github,
  },
];

const slider2 = [
  {
    color: "#d4h7h3",
    src: sass,
  },
  {
    color: "#d4e3ec",
    src: nodeImg,
  },
  {
    color: "#e5e0e1",
    src: mongoDbImg,
  },

  {
    color: "#d7d4cf",
    src: python,
  },

  {
    color: "#e1dad6",
    src: restApi,
  },
];

const SlidingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <>
      <div className={styles.slidingImages} ref={container}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((skills, idx) => {
            return (
              <div
                className={styles.skills}
                key={idx}
                style={{ backgroundColor: skills.color }}
              >
                <div className={styles.imageContainer}>
                  <img alt="img" src={skills.src} />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((skills, idx) => {
            return (
              <div
                className={styles.skills}
                key={idx}
                style={{ backgroundColor: skills.color }}
              >
                <div className={styles.imageContainer}>
                  <img alt="img" src={skills.src} />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* <div className={styles.btn}>
          <p>More skills</p>
        </div> */}
        <motion.div
          style={{ height: height }}
          className={styles.circleContainer}
        >
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </>
  );
};

export default SlidingImages;
