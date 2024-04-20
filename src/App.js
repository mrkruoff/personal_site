import "./App.css";
import Body from "./components/body";
import { useState } from "react";
import Sidebar from "./components/sidebar";

const App = () => {
  const [page, setPage] = useState("about");
  return (
    <div data-testid="page" className="flex md:h-screen bg-black">
      <Sidebar setPage={setPage} />
      <Body page={page} />
    </div>
  );
};

export default App;
