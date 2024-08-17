import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Header from "./components/Header/header/Index";
import { AnimatePresence } from "framer-motion";
import Error from "./components/Layout/ErrorPage/ErrorPage";

const App = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      {isHomePage ? (
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
