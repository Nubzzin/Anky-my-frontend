import { Link } from "react-router-dom";
import Card from "./Card";

const decks = [
    {
        id: 1,
        name: "Rust",
        cards: [
            { id: 1, front: "Front 1", back: "Back 1" },
            { id: 2, front: "Front 2", back: "Back 2" },
            { id: 3, front: "Front 3", back: "Back 3" },
        ],
        dueToday: 3,
    },
    {
        id: 2,
        name: "Russo",
        cards: [
            { id: 1, front: "Front 1", back: "Back 1" },
            { id: 2, front: "Front 2", back: "Back 2" },
        ],
        dueToday: 1,
    },
    {
        id: 3,
        name: "C++",
        cards: [
            { id: 1, front: "Front 1", back: "Back 1" },
            { id: 2, front: "Front 2", back: "Back 2" },
            { id: 3, front: "Front 3", back: "Back 3" },
            { id: 4, front: "Front 4", back: "Back 4" },
        ],
        dueToday: 3,
    },
    {
        id: 4,
        name: "Java",
        cards: [{ id: 1, front: "Front 1", back: "Back 1" }],
        dueToday: 1,
    },
];

export default function Dashboard() {
    let totalCards = 0;
    for (const deck of decks) {
        totalCards += deck.cards.length;
    }

    return (
        <div className="content">
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h5 className="card-title">Today's Reviews</h5>
                        <p className="card-text">
                            You have <strong>{totalCards} cards</strong> to
                            review across <strong>{decks.length} decks</strong>.
                        </p>
                        <Link to="/reviews" className="btn btn-accent mt-3">
                            Start Reviewing
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h5 className="card-title">Add New Flashcard</h5>
                        <p className="card-text">
                            Quickly add a new card to any of your decks.
                        </p>
                        <Link to="/add-card" className="btn btn-accent mt-3">
                            Add Card
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-4">
                {decks.map((deck) => (
                    <Card
                        key={deck.id}
                        id={deck.id}
                        title={deck.name}
                        cards={deck.cards.length}
                        dueToday={deck.dueToday}
                    />
                ))}
            </div>
        </div>
    );
}
