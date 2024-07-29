import React from "react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import GsapMagnetic from "../MagneticBtn/GsapMagnetic";

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <GsapMagnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </GsapMagnetic>
  );
}

// import React from "react";
// import styles from "./styles.module.scss";

// const RoundedButton = ({ children, ...attributes }) => {
//   return (
//     <>
//       <div className={styles.roundedButton}>
//         {children}
//         <div
//           className={styles.circle}
//           style={{ backgroundColor: "#455ce9" }}
//         ></div>
//       </div>
//     </>
//   );
// };

// export default RoundedButton;
