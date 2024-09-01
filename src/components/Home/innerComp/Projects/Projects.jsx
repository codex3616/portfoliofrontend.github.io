import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import SingleProject from "./singleProject/SingleProject";
import { motion } from "framer-motion";
import gsap from "gsap";
import RoundedButton from "../../../Layout/RoundedButton/RoundedButton";
import BurgerZest from "../../../../images/burger.png";
import LoginApp from "../../../../images/login.png";
import NoteTaking from "../../../../images/noteWave.png";
import MovieInfo from "../../../../images/moveInfo.png";
import { Link } from "react-router-dom";
import UseWindowWidth from "../../../Layout/windowHook/UseWindowWidth";

// need api data

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const projectList = [
  {
    title: " BurgerZest",
    src: BurgerZest,
    color: "#ddd",
  },
  {
    title: " Login App",
    src: LoginApp,
    color: "#8C8C8C",
  },
  {
    title: "MovieInfo",
    src: MovieInfo,
    color: "#000000",
  },
  {
    title: " NoteTaking",
    src: NoteTaking,
    color: "#706D63",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const windowWidth = UseWindowWidth();

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    if (windowWidth > 720) {
      //Move Container
      xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });
    }
    if (windowWidth > 420) {
      //Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
        duration: 0.5,
        ease: "power3",
      });
      //Move cursor label
      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
        duration: 0.45,
        ease: "power3",
      });
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
        duration: 0.45,
        ease: "power3",
      });
    }
  }, [windowWidth]);

  const moveItems = (x, y) => {
    if (windowWidth > 720) {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
    }
    if (windowWidth > 420) {
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);

      yMoveCursorLabel.current(y);
    }
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };
  const limitedProjectList =
    windowWidth < 720 ? projectList.slice(0, 2) : projectList;

  return (
    <>
      <main
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className={styles.projects}
      >
        <div className={styles.body}>
          {limitedProjectList.map((project, index) => {
            return (
              <SingleProject
                index={index}
                title={project.title}
                color={project.color}
                src={project.src}
                manageModal={manageModal}
                key={index}
                windowWidth={windowWidth}
              />
            );
          })}
        </div>
        <RoundedButton className={styles.btn}>
          <Link to="/work">
            <p>
              More work <sup>2</sup>
            </p>
          </Link>
        </RoundedButton>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projectList.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <img src={src} alt="img" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </main>
    </>
  );
};

export default Projects;
