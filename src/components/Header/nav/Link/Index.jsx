import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "../../header/anim";
import GsapMagnetic from "../../../Layout/MagneticBtn/GsapMagnetic";

const Index = ({ data, activeIndicator, setSelectedIndicator }) => {
  // console.log(activeIndicator);
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(data.href);
      }}
    >
      <motion.div
        className={styles.indicator}
        variants={scale}
        animate={activeIndicator ? "open" : "closed"}
      ></motion.div>

      <GsapMagnetic>
        <Link
          to={data.href}
          onClick={() => {
            data.setIsActive(!data.isActive);
          }}
        >
          {data.title}
        </Link>
      </GsapMagnetic>
    </motion.div>
  );
};

export default Index;
