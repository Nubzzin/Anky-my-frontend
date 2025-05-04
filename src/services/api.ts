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

export function getDecks() {
    return decks;
}

export function getDeck(id: number) {
    return decks.find((deck) => deck.id === id);
}
