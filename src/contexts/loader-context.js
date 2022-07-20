import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

const useLoader = () => useContext(LoaderContext);

export { LoaderProvider, useLoader };
