import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Layout = ({ children }) => (
  <div>
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
);
export default Layout;
