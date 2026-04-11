import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [jakiObrazLook, setJakiObrazLook] = useState(0);

  return (
    <GlobalContext.Provider value={{ jakiObrazLook, setJakiObrazLook }}>
      {children}
    </GlobalContext.Provider>
  );
}