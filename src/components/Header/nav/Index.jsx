import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "./Link/Index";
import { motion } from "framer-motion";
import { menuSlide } from "../header/anim";
import Curve from "./curve/Index";
import { useLocation } from "react-router-dom";
import GsapMagnetic from "../../Layout/MagneticBtn/GsapMagnetic";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const Index = ({
  setIsActive,
  isActive,
  setMenuIsVisible,
  setIsBurgerVisible,
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          className={styles.nav}
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className={styles.header}>
            <p>Navigation</p>
            <div className={styles.stripe}></div>
          </div>
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                data={{ ...item, index, isActive, setIsActive }}
                activeIndicator={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
                setMenuIsVisible={setMenuIsVisible}
                setIsBurgerVisible={setIsBurgerVisible}
              />
            );
          })}
        </div>

        <div className={styles.footer}>
          <div className={styles.footHeader}>
            <p>socials</p>
          </div>
          <div className={styles.links}>
            <GsapMagnetic>
              <a
                href="https://github.com/codex3616"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </GsapMagnetic>

            <GsapMagnetic>
              <a
                href="https://www.instagram.com/aarush_singh_999?igsh=MTA3c2h1bm11cXZmaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </GsapMagnetic>

            <GsapMagnetic>
              <a
                href="https://www.facebook.com/aakash.rajput.71465"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </GsapMagnetic>

            <GsapMagnetic>
              <a
                href="https://www.linkedin.com/in/akash-singh-0a2bb424a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </GsapMagnetic>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Index;
