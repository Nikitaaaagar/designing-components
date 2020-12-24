import React from "react";
import { THEME_LIST } from "../Contexts/ThemeContext";

const useTheme = (startingTheme) => {
  let [theme, setTheme] = React.useState(startingTheme);
  return {
    theme,
    toggleTheme: () => {
      if (theme === THEME_LIST.DARK) {
        setTheme(THEME_LIST.LIGHT);
      } else {
        setTheme(THEME_LIST.DARK);
      }
    },
  };
};

export default useTheme;
