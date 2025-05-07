import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    CardState,
    Deck,
    StruggleLevel,
    CardsToday,
    getDeck,
    deckTotalEachCards,
    updateDeck,
} from "../services/api";
import ErrorPage from "../pages/ErrorPage";
import FinishedPage from "./FinishedPage";

export default function DeckPage() {
    const [flip, setFlip] = useState(false);
    const [index, setIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [error, setError] = useState(false);

    const [deck, setDeck] = useState<Deck>({} as Deck);
    const [cardsToday, setCardsToday] = useState<CardsToday>({
        id: "",
        todays: [],
        new: [],
        review: [],
        due: [],
    });

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

            const cardsTodayEv = await deckTotalEachCards(id);
            if (!cardsTodayEv?.todays) {
                setError(true);
                return;
            }
            setCardsToday(cardsTodayEv);
            console.log(cardsTodayEv);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const sendData = () => {
            updateDeck(cardsToday);
        };
        sendData();
    }, [cardsToday]);

    if (error) {
        return <ErrorPage />;
    }

    const startProcess = () => {
        setStarted(true);
        if (cardsToday.todays.length === 0) {
            setFinished(true);
        }
    };

    const nextHandler = (state: StruggleLevel) => {
        if (
            (state === StruggleLevel.GOOD ||
                state === StruggleLevel.HARD ||
                state === StruggleLevel.AGAIN) &&
            (cardsToday.todays[index].cardState === CardState.NEW ||
                cardsToday.todays[index].cardState === CardState.DUE)
        ) {
            cardsToday.todays[index].interval *= state;
            deck.cards[index].cardState = CardState.REVIEW;
        } else {
            cardsToday.todays[index].interval *= state;
            cardsToday.todays[index].cardState = CardState.DUE;
            cardsToday.todays.filter(
                (card) => card.id === String(cardsToday.todays[index]),
            );
        }

        if (index + 1 < cardsToday.todays.length) {
            setIndex(index + 1);
        } else {
            setFinished(true);
        }
        setFlip(false);
        setCardsToday({ ...cardsToday });
    };

    return (
        <div className="container text-center py-5">
            <h2 className="mb-4">Deck {deck?.name}</h2>

            {!started ? (
                <>
                    <h1>Let's Start</h1>
                    <h3 className="text-primary">
                        Today's new cards: {cardsToday.new.length}
                    </h3>
                    <h3 className="text-success">
                        Today's due cards: {cardsToday.due.length}
                    </h3>
                    <h3 className="text-danger mb-4">
                        Today's review cards: {cardsToday.review.length}
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
                                <strong>
                                    {cardsToday.todays[index].front}
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

                        {cardsToday.todays[index].cardState ===
                            CardState.NEW && (
                            <button className="btn btn-primary disabled"></button>
                        )}
                        {cardsToday.todays[index].cardState ===
                            CardState.DUE && (
                            <button className="btn btn-success disabled"></button>
                        )}
                        {cardsToday.todays[index].cardState ===
                            CardState.REVIEW && (
                            <button className="btn btn-danger disabled"></button>
                        )}
                    </>
                ) : (
                    <>
                        <div className="mb-4">
                            <h4>
                                <strong>
                                    {cardsToday.todays[index].front}
                                </strong>
                            </h4>
                        </div>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <h5>{cardsToday.todays[index].back}</h5>
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
