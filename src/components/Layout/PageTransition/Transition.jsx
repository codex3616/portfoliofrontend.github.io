import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { usePathname } from "./PathnameContext";

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const Curve = (props) => {
  const pathname = usePathname();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // text animation variants
  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "47.5%",
      },
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className={styles.curve}>
      <div
        className={styles.background}
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
      />
      <motion.p {...anim(text)} className={styles.routeName}>
        <div className={styles.indicator}></div>
        {pathname.slice(1)}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {props.children}
    </div>
  );
};

// SVG Component
const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)} />
    </motion.svg>
  );
};

export default Curve;
