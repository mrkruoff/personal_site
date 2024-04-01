import React from "react";

const Sidebar = ({ setPage }) => {
  const classes = "block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer";

  const handleClick = (e) => {
    setPage(e.target.innerHTML.toLowerCase());
  };

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
      <div className="flex items-center space-x-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <span className="text-2xl font-extrabold">Sidebar</span>
      </div>
      <nav>
        <span className={classes} onClick={handleClick}>
          About
        </span>
        <span className={classes} onClick={handleClick}>
          Experience
        </span>
        <span className={classes} onClick={handleClick}>
          Contact
        </span>
      </nav>
    </div>
  );
};

export default Sidebar;
