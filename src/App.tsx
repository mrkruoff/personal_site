import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar.tsx";

const App = () => {
  const [page, setPage] = useState("About");
  return (
    <>
      <div data-testid="page" className="flex md:h-screen bg-black">
        <Sidebar setPage={setPage} />
        {/*<Body page={page} />*/}
        Test info
      </div>
      {/*<Footer />*/}
    </>
  );
};

export default App;
