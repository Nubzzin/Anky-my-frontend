import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Deck, getDecks, totalCards } from "../services/api";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [decks, setDecks] = useState<Deck[]>();
    const [tCards, setTCards] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setDecks(await getDecks());
            setTCards(await totalCards());
        };
        fetchData();
    }, []);

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
                                You have <strong>{tCards} cards</strong> to
                                review across{" "}
                                <strong>{decks?.length} decks</strong>.
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
                    {decks?.map((deck) => (
                        <Card
                            key={deck.id}
                            id={deck.id}
                            title={deck.name}
                            cards={deck.cards.length}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
