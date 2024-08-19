import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { opacity, slideUp } from "./anim";
import RoundedButton from "../../../Layout/RoundedButton/RoundedButton";
import { Link } from "react-router-dom";

const Description = () => {
  const container = useRef(null);
  const para = useRef(null);
  const isInView = useInView(container); // checking our descrip page is in view or not
  const paraIsInView = useInView(para);

  // ##################### for parallax

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // ####################### Done
  const phrase =
    "Ambitious Software Developer with a strong MERN stack foundation, completed B.Tech with an 8.0 CGPA. ";

  return (
    <>
      <div className={styles.description} ref={container}>
        <div className={styles.body}>
          <motion.p style={{ y: sm }}>
            {phrase.split(" ").map((word, idx) => {
              return (
                <span className={styles.mask} key={idx}>
                  <motion.span
                    variants={slideUp}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    custom={idx}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.p>
          <motion.p
            ref={para}
            variants={opacity}
            initial="initial"
            animate={paraIsInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>
          <div>
            <motion.div style={{ y: sm }} className={styles.buttonContainer}>
              <RoundedButton className={styles.button}>
                <Link to="/about">
                  <p>About me</p>
                </Link>
              </RoundedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
