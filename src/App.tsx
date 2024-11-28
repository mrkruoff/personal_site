import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
