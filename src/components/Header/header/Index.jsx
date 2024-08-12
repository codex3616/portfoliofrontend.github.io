import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Nav from "../nav/Index";
import { AnimatePresence } from "framer-motion"; // this is for nav exits animation
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
  const isContactPage = location.pathname === "/contact";

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

  return (
    <>
      <div
        className={`${styles.header} ${
          isHomePage || isAboutPage || isWorkPage || isContactPage
            ? styles.test
            : styles.headerBlack
        }`}
      >
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
        </div>
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
