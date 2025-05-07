import { Link } from "react-router-dom";
import { deckTotalEachCards, CardsToday } from "../services/api";
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
    const [cardsToday, setCardsToday] = useState<CardsToday>();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const cardsTodayEv = await deckTotalEachCards(id);
            if (!cardsTodayEv) {
                setError(true);
                return;
            }
            setCardsToday(cardsTodayEv);
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
                    {cardsToday?.due.length || 0} due today
                </p>
            </div>
        </div>
    );
}
