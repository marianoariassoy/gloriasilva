import { useState, createContext, useContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lan, setLan] = useState("es");
  const imageURL = "http://gloriasilvaphoto.com/backend/images/";

  return <LanguageContext.Provider value={{ lan, setLan, imageURL }}>{children}</LanguageContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useDataContext must be used within a Provider");
  }
  return context;
};
