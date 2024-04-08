import React from "react";

const Sidebar = ({ setPage }) => {
  const classes = "block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer";

  const handleClick = (e) => {
    setPage(e.target.innerHTML.toLowerCase());
  };

  return (
    <div className="bg-gray-900 text-white w-64 h-full flex flex-col w-1/6">
      <div className="flex items-center space-x-2 px-4 py-3">
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
        <span className="text-2xl font-extrabold">Mark Ruoff</span>
      </div>
      <nav className="flex-1">
        <span className={classes} onClick={handleClick}>
          About
        </span>
        <span className={classes} onClick={handleClick}>
          Experience
        </span>
      </nav>
    </div>
  );
};

export default Sidebar;
