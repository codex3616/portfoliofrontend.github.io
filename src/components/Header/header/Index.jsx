import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Nav from "../nav/Index";
import { AnimatePresence } from "framer-motion"; // this is for nav exits animation
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMagnetic from "../../Layout/MagneticBtn/GsapMagnetic";
import RoundedButton from "../../Layout/RoundedButton/RoundedButton";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight / 2 / 2 / 2, // when to appear burger cross..
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  return (
    <>
      <div className={styles.header}>
        <GsapMagnetic>
          <div className={styles.logo}>
            <p className={styles.copyright}>
              <FaRegCopyright />
            </p>
            <div className={styles.name}>
              <Link to="/">
                <p className={styles.codeBy}>Code by</p>
                <p className={styles.akash}>Akash</p>
                <p className={styles.singh}>Singh</p>
              </Link>
            </div>
          </div>
        </GsapMagnetic>

        <div className={styles.nav}>
          <GsapMagnetic>
            <div className={styles.el}>
              <Link to="/work">Work</Link>
              <div className={styles.indicator}></div>
            </div>
          </GsapMagnetic>

          <GsapMagnetic>
            <div className={styles.el}>
              <Link to="/about">About</Link>
              <div className={styles.indicator}></div>
            </div>
          </GsapMagnetic>

          <GsapMagnetic>
            <div className={styles.el}>
              <Link to="/contact">Contact</Link>
              <div className={styles.indicator}></div>
            </div>
          </GsapMagnetic>
        </div>
      </div>

      <div ref={burger} className={styles.headerButtonContainer}>
        <RoundedButton
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
          backgroundColor="#455ce9"
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </RoundedButton>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} isActive={isActive} />}
      </AnimatePresence>
    </>
  );
};

export default Index;
