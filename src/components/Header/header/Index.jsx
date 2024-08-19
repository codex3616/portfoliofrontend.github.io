import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Nav from "../nav/Index";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion"; // this is for nav exits animation
import { FaRegCopyright } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMagnetic from "../../Layout/MagneticBtn/GsapMagnetic";
import RoundedButton from "../../Layout/RoundedButton/RoundedButton";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false); // New state variable
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const burger = useRef(null);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isWorkPage = location.pathname === "/work";

  // ##################### for parallax
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const negY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // ####################### Done

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isBurgerVisible === false) {
      gsap.to(burger.current, {
        scale: 0,
        duration: 0.65,
        ease: "power1.out",
      });
    }
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight / 2 / 2 / 2, // when to appear burger cross..
        onLeave: () => {
          setIsBurgerVisible(true);
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.45,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          setIsBurgerVisible(false);
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.45,
            ease: "power1.out",
          });
        },
      },
    });
  }, [isBurgerVisible]);

  const toggleMenu = () => {
    setIsBurgerVisible(true);
    setMenuIsVisible(false);
    setIsActive(!isActive);
    gsap.to(burger.current, {
      scale: 1,
      duration: 0.45,
      ease: "power1.out",
    });
  };

  const toggleBurger = () => {
    setIsActive(!isActive);
    if (!menuIsVisible) {
      setMenuIsVisible(true);
      gsap.to(burger.current, {
        scale: 0,
        duration: 0.65,
        ease: "power1.out",
      });
    }
  };

  // lock the body scroll when side nav is open...
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the overflow on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <>
      <div
        className={`${styles.header} ${
          isHomePage || isAboutPage || isWorkPage
            ? styles.test
            : styles.headerBlack
        }`}
        ref={container}
      >
        <GsapMagnetic>
          <motion.div className={styles.logo} style={{ y: negY }}>
            <p className={styles.copyright}>
              <FaRegCopyright />
            </p>
            <div className={styles.name}>
              <Link to="/">
                <p className={styles.codeBy}>Code by</p>
                <p className={styles.akash}>Akash</p>
                <p className={styles.singh}>Singh</p>
                <p className={styles.singh2} style={{ display: "none" }}>
                  Singh
                </p>
              </Link>
            </div>
          </motion.div>
        </GsapMagnetic>

        <motion.div className={styles.nav} style={{ y: negY }}>
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

          <GsapMagnetic>
            <div
              className={styles.el}
              style={{ opacity: menuIsVisible ? "1" : "0" }}
            >
              <Link
                onClick={toggleMenu} // Updated onClick handler
                className={styles.menu}
              >
                Menu
              </Link>
              <div className={styles.menuIndicator}></div>
            </div>
          </GsapMagnetic>
        </motion.div>
      </div>

      <div ref={burger} className={styles.headerButtonContainer}>
        <RoundedButton
          onClick={toggleBurger} // Updated onClick handler
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
        {isActive && (
          <Nav
            setIsActive={setIsActive}
            isActive={isActive}
            setMenuIsVisible={setMenuIsVisible}
            setIsBurgerVisible={setIsBurgerVisible}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
