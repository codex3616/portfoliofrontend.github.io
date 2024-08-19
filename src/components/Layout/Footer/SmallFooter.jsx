import React from "react";
import styles from "./styles.module.scss";
import GsapMagnetic from "../MagneticBtn/GsapMagnetic";

const SmallFooter = () => {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.body}>
          <div className={styles.info}>
            <div>
              <span>
                <h3>Version</h3>
                <p>{currentYear} © Akash ✌️</p>
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
    </>
  );
};

export default SmallFooter;
