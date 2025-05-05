import { Link } from "react-router-dom";

export default function Card({
    id,
    title,
    cards,
}: {
    id: string;
    title: string;
    cards: number;
}) {
    return (
        <div className="col-md-4">
            <div className="card p-3 shadow-sm">
                <h6 className="text-muted">Active Deck</h6>
                <p className="mb-1">
                    <strong>
                        <Link to={`/${id}`} className="text-decoration-none">
                            {title} - {cards} cards
                        </Link>
                    </strong>
                </p>
                {/* <p className="text-muted small">{dueToday} due today</p> */}
            </div>
        </div>
    );
}
