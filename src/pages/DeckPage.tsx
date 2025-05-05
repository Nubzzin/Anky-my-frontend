import { Link, useParams } from "react-router-dom";
import {
    CardState,
    Deck,
    TodaysCards,
    getDeck,
    getTodaysCards,
} from "../services/api";
import ErrorPage from "../pages/ErrorPage";
import { useEffect, useState } from "react";

enum StruggleLevel {
    AGAIN,
    HARD,
    GOOD,
    EASY,
}

export default function DeckPage() {
    const [flip, setFlip] = useState(false);
    const [index, setIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);

    const [deck, setDeck] = useState<Deck>({} as Deck);
    const [todaysCards, setTodaysCards] = useState<TodaysCards>({
        cards: [],
        reviews: [],
        review: false,
    });

    const { id } = useParams();
    if (!id) {
        return <ErrorPage />;
    }

    useEffect(() => {
        const fetchData = async () => {
            setDeck(await getDeck(id));
            if (!deck) {
                return <ErrorPage />;
            }

            setTodaysCards(await getTodaysCards(id));
        };
        fetchData();
    }, []);

    const nextHandler = (state: CardState) => {
        if (index + 1 < deck.cards.length) {
            setIndex(index + 1);
        } else {
            setFinished(true);
        }
        setFlip(false);
    };

    return (
        <div className="container text-center py-5">
            <h2 className="mb-4">Deck {deck.name}</h2>

            {!started ? (
                <>
                    <h1>Let's Start</h1>
                    <h3>Today's new cards: {todaysCards.cards.length}</h3>
                    <h3 className="mb-4">
                        Today's due cards:{" "}
                        {
                            todaysCards.cards.filter(
                                (index) =>
                                    deck.cards[index].cardState ===
                                        CardState.DUE &&
                                    deck.cards[index].interval < 1,
                            ).length
                        }
                    </h3>
                    <div>
                        <button
                            className="btn btn-accent"
                            onClick={() => setStarted(true)}
                        >
                            Start
                        </button>
                    </div>
                </>
            ) : !finished ? (
                !flip ? (
                    <>
                        <div className="mb-4">
                            <h4>
                                <strong>
                                    {deck.cards[todaysCards.cards[index]].front}
                                </strong>
                            </h4>
                        </div>

                        <div>
                            <button
                                className="btn btn-outline-light"
                                onClick={() => setFlip(true)}
                            >
                                Show answer
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-4">
                            <h4>
                                <strong>
                                    {deck.cards[todaysCards.cards[index]].front}
                                </strong>
                            </h4>
                        </div>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <h5>{deck.cards[todaysCards.cards[index]].back}</h5>
                        </div>
                        <div>
                            <button
                                className="btn btn-outline-danger mx-1"
                                onClick={() => nextHandler(CardState.AGAIN)}
                            >
                                Again
                            </button>
                            <button
                                className="btn btn-outline-warning mx-1"
                                onClick={() => nextHandler(CardState.HARD)}
                            >
                                Hard
                            </button>
                            <button
                                className="btn btn-outline-success mx-1"
                                onClick={() => nextHandler(CardState.GOOD)}
                            >
                                Good
                            </button>
                            <button
                                className="btn btn-outline-info mx-1"
                                onClick={() => nextHandler(CardState.EASY)}
                            >
                                Easy
                            </button>
                        </div>
                    </>
                )
            ) : (
                <>
                    <div className="mb-4">
                        <h3>Finished</h3>
                        <h4>Nothing to see here!</h4>
                    </div>
                    <div>
                        <Link to="/" className="btn btn-outline-light">
                            Return
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
