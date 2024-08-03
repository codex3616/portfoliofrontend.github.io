import styles from "./styles.module.scss";
import { useRef } from "react";
import logo from "../../../images/finial.webp";
import { GoArrowDownLeft } from "react-icons/go";
import { useScroll, motion, useTransform } from "framer-motion";
import GsapMagnetic from "../MagneticBtn/GsapMagnetic";
import RoundedButton from "../RoundedButton/RoundedButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  return (
    <div className={styles.footer} ref={container}>
      <div className={styles.body}>
        <motion.div style={{ y }} className={styles.title}>
          <span>
            <GsapMagnetic>
              <div className={styles.imageContainer}>
                <img alt="img" src={logo} />
              </div>
            </GsapMagnetic>

            <h2>Let's work</h2>
          </span>
          <h2 className={styles.together}>together</h2>
          <motion.div style={{ x: x }} className={styles.buttonContainer}>
            <RoundedButton className={styles.button} backgroundColor="#3c54ea">
              <p>Get in touch</p>
            </RoundedButton>
          </motion.div>

          <GoArrowDownLeft />
        </motion.div>
        <div className={styles.nav}>
          <RoundedButton>
            <p>singhakash1922@gmail.com</p>
          </RoundedButton>
          <div className={styles.space}></div>

          <RoundedButton>
            <p>+91 96 25 01 67 58</p>
          </RoundedButton>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>{currentYear} © Edition</p>
            </span>
            <span>
              <h3>Local Time</h3>
              <p>{`${currentTime}   `} GMT+05</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <GsapMagnetic>
                <a
                  href="https://github.com/codex3616"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </GsapMagnetic>
            </span>

            <GsapMagnetic>
              <a
                href="https://www.instagram.com/aarush_singh_999?igsh=MTA3c2h1bm11cXZmaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className={styles.insta}
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
    </div>
  );
}
