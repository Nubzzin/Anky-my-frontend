import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import MainPage from "./pages/MainPage";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import DeckPage from "./pages/DeckPage";
import Reviews from "./pages/Reviews";
import AddCard from "./pages/AddCard";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route index element={<Dashboard />} />
                <Route path="/stats" element={<Stats />} />
            </Route>
            <Route path="/add-card" element={<AddCard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/:id" element={<DeckPage />} />
        </Routes>
    );
}
