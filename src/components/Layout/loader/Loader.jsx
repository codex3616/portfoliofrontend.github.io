import React from "react";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <>
      <main className={styles.loader}>
        <div className={styles.dots}></div>
      </main>
    </>
  );
};

export default Loader;
