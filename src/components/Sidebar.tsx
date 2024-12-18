import React from "react";

type SidebarProps = {
  setPage: (page: string) => void;
};

type NavigationItem = {
  name: string;
};

const navigation: NavigationItem[] = [
  { name: "About" },
  { name: "Experience" },
];

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
  const handleClick = (page: string) => {
    setPage(page);
  };

  return (
    <div data-testid="sidebar" className="flex h-auto  bg-gray-900">
      <nav className="text-white flex flex-col ">
        <div className="p-4">
          <h2 className="text-2xl font-extrabold underline">Mark Ruoff</h2>
        </div>
        <ul className="space-y-2 p-4">
          {navigation.map((item, index) => (
            <li key={index}>
              <button
                className="block py-2 px-4 text-xl hover:bg-gray-700 cursor-pointer bg-transparent border-none text-left"
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
