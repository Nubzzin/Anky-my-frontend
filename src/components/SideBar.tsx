import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <>
            <div className="sidebar">
                <h2>Anki-my</h2>
                <Link to="/">
                    <i className="bi bi-house-door-fill me-2"></i>Dashboard
                </Link>
                <Link to="/stats">
                    <i className="bi bi-bar-chart-fill me-2"></i>Stats
                </Link>
                <Link to="/add-card">
                    <i className="bi bi-plus-square-fill me-2"></i>Add Flashcard
                </Link>
            </div>
        </>
    );
}
