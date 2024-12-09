import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  const [page, setPage] = useState("About");
  return (
    <div data-testid="page" className="flex flex-col min-h-screen bg-black">
      <div className="flex flex-grow min-h-screen">
        <Sidebar setPage={setPage} />
        <Body page={page} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
