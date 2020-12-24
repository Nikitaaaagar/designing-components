import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import {
  ThemeContext,
  THEME_LIST,
  ThemeProvider,
} from "../../Contexts/ThemeContext";

const LayoutComponent = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const classNameValue =
    theme === THEME_LIST.LIGHT
      ? "overflow-auto bg-white"
      : "overflow-auto bg-gray-700";
  return (
    <div className={classNameValue}>
      <div className="mx-4 my-3">
        <Header />
        <Menu />
        {children}
        <Footer />
      </div>
    </div>
  );
};

const Layout = ({ children }) => (
  <ThemeProvider initialTheme={THEME_LIST.DARK}>
    <LayoutComponent>{children}</LayoutComponent>
  </ThemeProvider>
);
export default Layout;
