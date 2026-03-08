import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
import Cursor from "./components/Cursor";

function App() {
    return (
        <>
            <Cursor />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/work/:id"
                    element={<WorkDetail />}
                />
            </Routes>
        </>
    );
}

export default App;
