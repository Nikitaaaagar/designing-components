// import React from "react";

// const Menu = () => <img src="images/menu.gif" alt="" />;

// export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Menu = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 mb-6 p-6 rounded-md">
      <div className="w-1/2 block flex-grow">
        <div className="md:flex-grow">
          <span className="mr-3 text-white">Home</span>
          <span className="text-white">Speakers</span>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/speakers">Speakers</Link> */}
        </div>
      </div>
      <button
        onClick={() => toggleTheme()}
        className="bg-black text-blue-500 hover:text-blue-500 font-semibold py-1 px-2 rounded focus:outline"
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Menu;
