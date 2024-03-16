import "./App.css";
import Footer from "./components/footer";
import Body from "./components/body";
import { useState } from "react";
import Navigation from "./components/navigation";

const App = () => {
  const [page, setPage] = useState("about");
  return (
    <div className="h-screen bg-indigo-400 ">
      <Navigation setPage={setPage} />
      <Body page={page} />
      <Footer />
    </div>
  );
};

export default App;
