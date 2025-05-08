import { Deck, getDecks, newDeck, newCard } from "../services/api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function AddCard() {
    const [decks, setDecks] = useState([] as Deck[]);
    const [error, setError] = useState(false);
    const [updateDecks, setUpdateDecks] = useState(false);

    const [deckName, setDeckName] = useState("");
    const [cardFront, setCardFront] = useState("");
    const [cardBack, setCardBack] = useState("");
    const [selectValue, setSelectValue] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const decksEv = await getDecks();
            if (!decksEv) {
                setError(true);
                return;
            }
            setDecks(decksEv);
        };
        fetchData();
    }, [updateDecks]);
    if (error) {
        return <ErrorPage />;
    }

    const makeNewDeck = (e: React.FormEvent) => {
        e.preventDefault();
        newDeck(deckName);
        setDeckName("");
        setUpdateDecks(!updateDecks);
    };

    const addNewCard = (e: React.FormEvent) => {
        e.preventDefault();
        newCard(selectValue, cardFront, cardBack);
        setCardFront("");
        setCardBack("");
    };

    return (
        <div className="container py-5 text-light">
            <h2 className="mb-4">Manage Your Decks</h2>

            <div className="card bg-dark mb-4">
                <div className="card-body">
                    <h4 className="card-title">Create a New Deck</h4>
                    <form onSubmit={makeNewDeck}>
                        <div className="mb-3">
                            <label htmlFor="newDeckName" className="form-label">
                                Deck Name
                            </label>
                            <input
                                type="text"
                                className="form-control bg-dark text-light border-secondary"
                                id="newDeckName"
                                placeholder="Enter new deck name"
                                value={deckName}
                                onChange={(e) => setDeckName(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Create Deck
                        </button>
                    </form>
                </div>
            </div>

            <div className="card bg-dark">
                <div className="card-body">
                    <h4 className="card-title">Add Card to Existing Deck</h4>
                    <form onSubmit={addNewCard}>
                        <div className="mb-3">
                            <label htmlFor="deckSelect" className="form-label">
                                Select Deck
                            </label>
                            <select
                                className="form-control bg-dark text-light border-secondary"
                                id="deckSelect"
                                onChange={(e) => setSelectValue(e.target.value)}
                            >
                                <option selected disabled>
                                    Choose a deck...
                                </option>
                                {decks.map((deck) => (
                                    <option key={deck.id} value={deck.id}>
                                        {deck.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardFront" className="form-label">
                                Card Front
                            </label>
                            <input
                                type="text"
                                className="form-control bg-dark text-light border-secondary"
                                id="cardFront"
                                placeholder="Question or prompt"
                                value={cardFront}
                                onChange={(e) => setCardFront(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardBack" className="form-label">
                                Card Back
                            </label>
                            <textarea
                                className="form-control bg-dark text-light border-secondary"
                                id="cardBack"
                                rows={3}
                                placeholder="Answer or explanation"
                                value={cardBack}
                                onChange={(e) => setCardBack(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">
                            Add Card
                        </button>
                    </form>
                </div>
                <Link to="/" className="btn btn-accent">
                    Go back
                </Link>
            </div>
        </div>
    );
}
