import React, { useEffect, useState, lazy, Suspense } from "react";
import styles from "./styles.module.scss";
import Landing from "./innerComp/Landing/Landing";
// import Projects from "./innerComp/Projects/Projects";
import Description from "./innerComp/Description/Description";
// import SlidingImages from "./innerComp/slidingImages/SlidingImages";
import Footer from "../Layout/Footer/Footer";
import PreLoader from "./innerComp/Preloader/PreLoader";
import Loader from "../Layout/loader/Loader";

import { AnimatePresence } from "framer-motion";

const Projects = lazy(() => import("./innerComp/Projects/Projects"));
const SlidingImages = lazy(() =>
  import("./innerComp/slidingImages/SlidingImages")
);
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {isLoading && <PreLoader />}
        </AnimatePresence>

        <Landing />
        <Description />
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <SlidingImages />
        </Suspense>
        <Footer />
      </main>
    </>
  );
};

export default Home;
