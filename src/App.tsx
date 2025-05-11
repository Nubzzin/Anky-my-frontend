import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import MainPage from "./pages/MainPage";
import DashboardPage from "./pages/DashboardPage";
import StatsPage from "./pages/StatsPage";
import DeckPage from "./pages/DeckPage";
import ReviewsPage from "./pages/ReviewsPage";
import AddCardPage from "./pages/AddCardPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route index element={<DashboardPage />} />
                <Route path="/stats" element={<StatsPage />} />
            </Route>
            <Route path="/add-card" element={<AddCardPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/:id" element={<DeckPage />} />
        </Routes>
    );
}
