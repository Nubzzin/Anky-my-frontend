import { Link } from "react-router-dom";
import Card from "../components/Card";
import { getDecks } from "../services/api";

const decks = getDecks();

export default function Dashboard() {
    let totalCards = 0;
    for (const deck of decks) {
        totalCards += deck.cards.length;
    }

    return (
        <>
            <div className="header">
                <h4>Dashboard</h4>
            </div>
            <div className="content">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm">
                            <h5 className="card-title">Today's Reviews</h5>
                            <p className="card-text">
                                You have <strong>{totalCards} cards</strong> to
                                review across{" "}
                                <strong>{decks.length} decks</strong>.
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
                            <Link
                                to="/add-card"
                                className="btn btn-accent mt-3"
                            >
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
        </>
    );
}
