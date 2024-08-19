/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../../../images/finial.jpeg";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import UseWindowWidth from "../../../Layout/windowHook/UseWindowWidth";

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

const Landing = () => {
  const windowWidth = UseWindowWidth(); // custom hook...
  const container = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPosition = 0;
  let direction = -1;
  let debounceTimer;
  let scrollTriggerInstance;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateDirection = (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        direction = e.direction * -1;
      }, 50); // Adjust the debounce delay as needed
    };

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: 0.25,
      onUpdate: updateDirection,
    });

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
      scrollTriggerInstance.kill();
    };
  }, []);

  const animate = () => {
    if (xPosition <= -slider.current.offsetWidth) {
      xPosition = 0;
    } else if (xPosition >= 0) {
      xPosition = -slider.current.offsetWidth;
    }

    gsap.set(firstText.current, { x: xPosition });
    gsap.set(secondText.current, { x: xPosition });

    xPosition += 2 * direction; // Adjust the speed as needed
  };

  // ##################### for parallax

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const posY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const negY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const fastPosY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Apply a spring for smoother motion
  const smoothFastPosY = useSpring(fastPosY, {
    stiffness: 90,
    damping: 10,
  });

  // ####################### Done
  return (
    <>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        ref={container}
        className={styles.landing}
      >
        <motion.div
          style={windowWidth > 600 ? { y: posY } : { y: smoothFastPosY }}
          className={styles.imgContainer}
        >
          <img src={img} alt="Akash avtar" />
        </motion.div>
        <motion.div
          className={styles.sliderContainer}
          style={{ y: windowWidth < 600 ? negY : 0 }}
        >
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Akash Singh -</p>
            <p ref={secondText}>Akash Singh -</p>
          </div>
        </motion.div>

        <motion.div className={styles.description} style={{ y: negY }}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" />
          </svg>
          <p>Software</p>
          <p>Engineer</p>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Landing;
