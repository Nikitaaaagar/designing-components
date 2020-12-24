import React from "react";
import useTheme from "../Hooks/useTheme";
const ThemeContext = React.createContext();

const THEME_LIST = {
  DARK: "dark",
  LIGHT: "light",
};
const ThemeProvider = ({ children, initialTheme }) => {
  const state = useTheme(initialTheme);
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, THEME_LIST };
