import React from "react";

type SidebarProps = {
  setPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
  const classes = "block py-2 px-4 text-xl hover:bg-gray-700 cursor-pointer";

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    setPage((e.target as HTMLSpanElement).innerHTML);
  };

  return (
      <div
          data-testid="sidebar"
          className="bg-gray-900 text-white w-64 h-auto flex flex-col w-1/6"
      >
        <div className="flex items-center space-x-2 px-4 py-3">
          <span className="text-2xl font-extrabold underline">Mark Ruoff</span>
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