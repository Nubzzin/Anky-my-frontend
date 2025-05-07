export interface Card {
    id: string;
    front: string;
    back: string;
    interval: number;
    cardState: CardState;
}

export interface Deck {
    id: string;
    name: string;
    cards: Card[];
}

export interface CardsToday {
    id: string;
    todays: Card[];
    new: Card[];
    review: Card[];
    due: Card[];
}

export enum CardState {
    NEW,
    REVIEW,
    DUE,
}

export enum StruggleLevel {
    AGAIN = 1,
    HARD = 1.2,
    GOOD = 1.4,
    EASY = 2.5,
}

const decks: Deck[] = [
    {
        id: "1",
        name: "Rust",
        cards: [
            {
                id: "1",
                front: "What is Rust's memory management model?",
                back: "Ownership system with borrowing rules and no garbage collector",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "2",
                front: "What is the keyword for declaring a variable in Rust?",
                back: "let",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "3",
                front: "What does the '?' operator do in Rust?",
                back: "It's a shorthand for error propagation, returning early if an error occurs",
                interval: 1,
                cardState: CardState.NEW,
            },
        ],
    },
    {
        id: "2",
        name: "Russian",
        cards: [
            {
                id: "1",
                front: "How do you say 'hello' in Russian?",
                back: "Привет (Privet)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "2",
                front: "What is the capital of Russia?",
                back: "Moscow (Москва)",
                interval: 1,
                cardState: CardState.NEW,
            },
        ],
    },
    {
        id: "3",
        name: "C++",
        cards: [
            {
                id: "1",
                front: "What is a pointer in C++?",
                back: "A variable that stores the memory address of another variable",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "2",
                front: "What is the difference between stack and heap memory in C++?",
                back: "Stack is used for static memory allocation and heap for dynamic memory allocation",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "3",
                front: "What is a virtual function in C++?",
                back: "A function that can be overridden in derived classes, enabling polymorphism",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "4",
                front: "What does 'const' keyword mean for a method in C++?",
                back: "It indicates the method won't modify any member variables of the class",
                interval: 1,
                cardState: CardState.NEW,
            },
        ],
    },
    {
        id: "4",
        name: "Java",
        cards: [
            {
                id: "1",
                front: "What is the difference between JDK, JRE, and JVM?",
                back: "JDK (Java Development Kit) includes development tools, JRE (Java Runtime Environment) is needed to run Java applications, and JVM (Java Virtual Machine) executes Java bytecode",
                interval: 1,
                cardState: CardState.NEW,
            },
        ],
    },
];

export async function getDecks(): Promise<Deck[]> {
    return decks;
}

export async function getDeck(
    id: string | undefined,
): Promise<Deck | undefined> {
    const deck = decks.find((deck) => deck.id === id);
    if (deck) {
        return deck;
    }
    return {} as Deck;
}

export async function totalCards(): Promise<number> {
    return decks.reduce((total, deck) => total + deck.cards.length, 0);
}

export async function deckTotalEachCards(
    id: string,
): Promise<CardsToday | undefined> {
    const deck = decks.find((deck) => deck.id === id);
    if (!deck) {
        return undefined;
    }
    const cards: CardsToday = {
        id: id,
        todays: getTodaysCards(id),
        new: [],
        review: [],
        due: [],
    };

    const maxNew: number = 20;
    const maxReview: number = 40;
    const maxDue: number = 200;
    deck.cards.forEach((card) => {
        if (card.cardState === CardState.NEW && maxNew >= cards.new.length) {
            cards.new.push(card);
        } else if (
            card.cardState === CardState.REVIEW &&
            maxReview >= cards.review.length
        ) {
            cards.review.push(card);
        } else if (
            card.cardState === CardState.DUE &&
            maxDue >= cards.due.length &&
            card.interval < 1
        ) {
            cards.due.push(card);
        }
    });
    const forReview: Card[] = [];
    cards.todays.forEach((card) => {
        if (
            card.cardState === CardState.NEW ||
            card.cardState === CardState.DUE
        ) {
            forReview.push(card);
        }
    });
    const cardsReview: Card[] = [...cards.todays, ...forReview];
    cards.todays = cardsReview;
    return cards;
}

function getTodaysCards(id: string | undefined): Card[] {
    const deck = decks.find((deck) => deck.id === id);
    if (!deck) {
        return [];
    }
    const indexes: Card[] = [];

    deck.cards.forEach((card) => {
        if (
            card.cardState === CardState.NEW ||
            (card.cardState === CardState.DUE && card.interval < 1) ||
            card.cardState === CardState.REVIEW
        ) {
            indexes.push(card);
        }
    });
    return indexes;
}

export function updateDeck(cardsToday: CardsToday): void {
    const deck = decks.find((deck) => deck.id === cardsToday.id);
    if (!deck) {
        return;
    }
    deck.cards.forEach((cardDeck) => {
        const card = cardsToday.todays.find((cardToday) => {
            if (cardDeck.id === cardToday.id) {
                return cardToday;
            }
        });
        return card;
    });
}
