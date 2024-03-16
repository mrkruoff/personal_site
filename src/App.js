import "./App.css";
import Header from "./components/navigation";
import Footer from "./components/footer";
import Body from "./components/body";
import { useState } from "react";
import Navigation from "./components/navigation";

const App = () => {
  const [page, setPage] = useState("about");
  return (
    <div className=" flex flex-col h-screen justify-between bg-indigo-400">
      <Navigation setPage={setPage} />
      <Body page={page} />
      <Footer />
    </div>
  );
};

export default App;
