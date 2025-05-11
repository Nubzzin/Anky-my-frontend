import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeck, updateDeck } from "../services/api";
import { CardState, StruggleLevel } from "../utils/utils";
import { Deck } from "../models/models";
import ErrorPage from "../pages/ErrorPage";
import FinishedPage from "../pages/FinishedPage";

export default function DeckPage() {
    const [flip, setFlip] = useState(false);
    const [index, setIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [error, setError] = useState(false);

    const [deck, setDeck] = useState<Deck>(new Deck("", "", []));

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                setError(true);
                return;
            }

            const deckEv = await getDeck(id);
            if (!deckEv) {
                setError(true);
                return;
            }
            setDeck(deckEv);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const sendData = () => {
            if (!id) {
                setError(true);
                return;
            }
            updateDeck(deck.todaysCard, id);
        };
        sendData();
    }, [deck]);

    if (error) {
        return <ErrorPage />;
    }

    const startProcess = () => {
        setStarted(true);
        if (deck.todaysCard.length === 0) {
            setFinished(true);
        }
    };

    const nextHandler = (struggle: StruggleLevel) => {
        if (
            (struggle === StruggleLevel.AGAIN ||
                struggle === StruggleLevel.GOOD ||
                struggle === StruggleLevel.HARD) &&
            (deck.todaysCard[index].cardState === CardState.NEW ||
                deck.todaysCard[index].cardState === CardState.DUE)
        ) {
            deck.cards[index].cardState = CardState.REVIEW;
        } else if (struggle === StruggleLevel.EASY) {
            deck.cards[index].cardState = CardState.DUE;
        } else {
            deck.todaysCard[index].cardState = CardState.DUE;
            deck.todaysCard.filter(
                (card) => card.id === String(deck.todaysCard[index]),
            );
        }
        deck.todaysCard[index].updateDate(struggle);

        if (index + 1 < deck.todaysCard.length) {
            setIndex(index + 1);
        } else {
            setFinished(true);
        }
        setFlip(false);
    };

    return (
        <div className="container text-center py-5">
            <h2 className="mb-4">Deck {deck?.name}</h2>

            {!started ? (
                <>
                    <h1>Let's Start</h1>
                    <h3 className="text-primary">
                        Today's new cards: {deck.getNewToday().length}
                    </h3>
                    <h3 className="text-success">
                        Today's due cards: {deck.getDueToday().length}
                    </h3>
                    <h3 className="text-danger mb-4">
                        Today's review cards: {deck.getReviewToday().length}
                    </h3>
                    <div>
                        <button
                            className="btn btn-accent mx-2"
                            onClick={startProcess}
                        >
                            Start
                        </button>
                        <Link to="/" className="btn btn-accent mx-2">
                            Cancel
                        </Link>
                    </div>
                </>
            ) : !finished ? (
                !flip ? (
                    <>
                        <div className="mb-4">
                            <h4>
                                <strong>{deck.todaysCard[index].front}</strong>
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

                        {deck.todaysCard[index].cardState === CardState.NEW && (
                            <button className="btn btn-primary disabled"></button>
                        )}
                        {deck.todaysCard[index].cardState === CardState.DUE && (
                            <button className="btn btn-success disabled"></button>
                        )}
                        {deck.todaysCard[index].cardState ===
                            CardState.REVIEW && (
                            <button className="btn btn-danger disabled"></button>
                        )}
                    </>
                ) : (
                    <>
                        <div className="mb-4">
                            <h4>
                                <strong>{deck.todaysCard[index].front}</strong>
                            </h4>
                        </div>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <h5>{deck.todaysCard[index].back}</h5>
                        </div>
                        <div>
                            <button
                                className="btn btn-outline-danger mx-1"
                                onClick={() => nextHandler(StruggleLevel.AGAIN)}
                            >
                                Again
                            </button>
                            <button
                                className="btn btn-outline-warning mx-1"
                                onClick={() => nextHandler(StruggleLevel.HARD)}
                            >
                                Hard
                            </button>
                            <button
                                className="btn btn-outline-success mx-1"
                                onClick={() => nextHandler(StruggleLevel.GOOD)}
                            >
                                Good
                            </button>
                            <button
                                className="btn btn-outline-info mx-1"
                                onClick={() => nextHandler(StruggleLevel.EASY)}
                            >
                                Easy
                            </button>
                        </div>
                    </>
                )
            ) : (
                <FinishedPage />
            )}
        </div>
    );
}
