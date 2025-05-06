import { Link } from "react-router-dom";
import { Deck, CardState, getDeck } from "../services/api";
import { useEffect, useState } from "react";

import ErrorPage from "../pages/ErrorPage";

export default function Card({
    id,
    title,
    cards,
}: {
    id: string;
    title: string;
    cards: number;
}) {
    const [deck, setDeck] = useState<Deck>();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const deckEv = await getDeck(id);
            if (!deckEv) {
                setError(true);
                console.error("Deck not found");
                return;
            }
            setDeck(deckEv);
        };
        fetchData();
    }, [id]);

    if (error) {
        return <ErrorPage />;
    }

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
                <p className="text-muted small">
                    {deck?.cards.reduce((total, card) => {
                        if (
                            card.cardState === CardState.DUE &&
                            card.interval <= 1
                        ) {
                            return total + 1;
                        }
                        return total;
                    }, 0)}{" "}
                    due today
                </p>
            </div>
        </div>
    );
}
