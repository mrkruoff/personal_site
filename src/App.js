import "./App.css";
import Footer from "./components/footer";
import Body from "./components/body";
import { useState } from "react";
import Sidebar from "./components/sidebar";

const App = () => {
  const [page, setPage] = useState("about");
  return (
    <div className="flex h-screen bg-black">
      <Sidebar setPage={setPage} />
      <Body page={page} />
      <Footer />
    </div>
  );
};

export default App;
