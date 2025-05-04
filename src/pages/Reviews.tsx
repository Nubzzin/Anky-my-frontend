import { Link } from "react-router-dom";

export default function Reviews() {
    return (
        <div>
            <h1>Reviews</h1>
            <p>This is the reviews page.</p>
            <Link to="/" className="btn btn-accent">
                Home
            </Link>
        </div>
    );
}
