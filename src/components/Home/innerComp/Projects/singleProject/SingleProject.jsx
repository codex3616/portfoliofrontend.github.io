import React from "react";
import styles from "./styles.module.scss";

const SingleProject = ({ index, title, manageModal, src, color }) => {
  return (
    <>
      <div className={styles.single}>
        <div
          onMouseEnter={(e) => {
            manageModal(true, index, e.clientX, e.clientY);
          }}
          onMouseLeave={(e) => {
            manageModal(false, index, e.clientX, e.clientY);
          }}
          className={styles.project}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modal} style={{ backgroundColor: color }}>
              <img src={src} alt="img" />
            </div>
          </div>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>Design & Development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
