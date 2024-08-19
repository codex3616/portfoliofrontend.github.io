import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const VanillaLine = () => {
  const path = useRef(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let x = 0.5;

  useEffect(() => {
    setPath(progress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPath = (progress) => {
    const { innerWidth } = window;
    const width = innerWidth * 0.7; // here 0.7 taken as i gave width to main is 70% and now this width variable has actual width of line so we can use it
    path.current.setAttributeNS(
      "",
      "d",
      `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
    ); // this will create line
  };

  const manageMouseEnter = () => {
    if (reqId) {
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress += movementY;
    setPath(progress);
  };
  const manageMouseLeave = () => {
    // this is for animate on mouse leave
    animateOut();
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <>
      <main className={styles.main}>
        <div className={styles.line}>
          <div
            className={styles.box}
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
      </main>
    </>
  );
};

export default VanillaLine;
