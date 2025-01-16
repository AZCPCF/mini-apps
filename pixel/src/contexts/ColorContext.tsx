import { createContext, FC, PropsWithChildren, useState } from "react";

export const ColorContext = createContext({
  color: "",
  setColor: (color: string) => {},
});
export const ColorContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState("#ef4444");
  return (  
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
