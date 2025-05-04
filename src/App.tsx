import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import Dashboard from "./components/Dashboard";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/stats" element={<></>} />
                    <Route path="/add-card" element={<></>} />
                </Route>
            </Routes>
        </>
    );
}
