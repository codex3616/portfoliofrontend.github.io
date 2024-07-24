import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { opacity, slideUp } from "./anim";
import GsapMagnetic from "../../../Layout/MagneticBtn/GsapMagnetic";

const Description = () => {
  const container = useRef(null);
  const isInView = useInView(container); // checking our descrip page is in view or not

  // ##################### for parallax

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // ####################### Done
  const phrase =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem rerum non, delectus pariatur similique vitae eius! Minima cum voluptatem tempora!";

  return (
    <>
      <div className={styles.description} ref={container}>
        <div className={styles.body}>
          <p>
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
          </p>
          <motion.p
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae
            sapiente a ab. Lorem ipsum dolor sit amet.
          </motion.p>
          <div>
            <motion.div style={{ y: sm }} className={styles.buttonContainer}>
              <GsapMagnetic>
                <p className={styles.button}>About me</p>
              </GsapMagnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
