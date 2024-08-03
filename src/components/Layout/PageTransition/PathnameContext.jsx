import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PathnameContext = createContext();

export const PathnameProvider = ({ children }) => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <PathnameContext.Provider value={pathname}>
      {children}
    </PathnameContext.Provider>
  );
};

export const usePathname = () => useContext(PathnameContext);
