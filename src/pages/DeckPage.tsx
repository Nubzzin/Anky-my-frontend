import { Link, useParams } from "react-router-dom";
import { getDeck } from "../services/api";
import { useEffect, useState } from "react";

export default function DeckPage() {
    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(false);

    let deck;
    {
        const { id } = useParams();
        deck = getDeck(Number(id));
        if (!deck) {
            return <div>Deck not found</div>;
        }
    }

    const handleFlip = () => {
        setFlip(!flip);
    };

    const handleStruggle = (n: number) => {
        deck.cards[index].struggle = n;
        setIndex(index + 1);
        setFlip(false);
        if (
            deck.cards[index].struggle !== 0 &&
            deck.cards[index].seenToday === false
        ) {
            deck.cards[index].seenToday = true;
            deck.cards.push(deck.cards[index]);
        } else {
            deck.cards[index].seenToday = true;
        }

        switch (deck.cards[index].struggle) {
            case 0:
                deck.cards[index].days = 8;
                break;
            case 1:
                deck.cards[index].days = 3;
                break;
            case 2:
                deck.cards[index].days = 1;
                break;
            case 3:
                deck.cards[index].days = 1;
                break;
        }

        if (index === deck.cards.length - 1) {
            clean(deck);
            console.log(deck.cards);
        }
    };

    const clean = (deck) => {
        // TODO: DEBUG ONLY
        deck.cards.forEach((card) => {
            if (card.seenToday) {
                card.seenToday = false;
            }
        });
        while (deck.cards.length > deck.size) {
            deck.cards.shift();
        }
    };

    return (
        <div className="container text-center py-5">
            <h2 className="mb-4">Deck {deck.name}</h2>

            {deck.cards.length > index ? (
                !flip ? (
                    <div className="mb-4">
                        <h4>
                            <strong>{deck.cards[index].front}</strong>
                        </h4>
                        <button
                            className="btn btn-outline-light"
                            onClick={handleFlip}
                        >
                            Show answer
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <h4>
                                <strong>{deck.cards[index].front}</strong>
                            </h4>
                        </div>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <h5>{deck.cards[index].back}</h5>
                        </div>

                        <button
                            className="btn btn-outline-light"
                            onClick={() => handleStruggle(3)}
                        >
                            Again
                        </button>
                        <button
                            className="btn btn-outline-light"
                            onClick={() => handleStruggle(2)}
                        >
                            Hard
                        </button>
                        <button
                            className="btn btn-outline-light"
                            onClick={() => handleStruggle(1)}
                        >
                            Good
                        </button>
                        <button
                            className="btn btn-outline-light"
                            onClick={() => handleStruggle(0)}
                        >
                            Easy
                        </button>
                    </>
                )
            ) : (
                <>
                    <h3>Finished</h3>
                    <Link to="/" className="btn btn-outline-light">
                        Return
                    </Link>
                    {console.log(deck.cards)}
                </>
            )}
        </div>
    );
}
