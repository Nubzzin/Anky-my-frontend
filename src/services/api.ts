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

export interface TodaysCards {
    cards: number[];
    reviews: number[];
    review: boolean;
}

export enum CardState {
    NEW,
    REVIEW,
    DUE,
}

export enum StruggleLevel {
    AGAIN = 1,
    HARD = 1.3,
    GOOD = 1.6,
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

export async function getTodaysCards(
    id: string | undefined,
): Promise<TodaysCards | undefined> {
    const deck = decks.find((deck) => deck.id === id);
    if (!deck) {
        return {} as TodaysCards;
    }
    const indexes: number[] = [];

    for (let i = 0; i < deck.cards.length; i++) {
        const card = deck.cards[i];
        if (
            card.cardState === CardState.NEW ||
            (card.cardState === CardState.DUE && card.interval <= 1) ||
            card.cardState === CardState.REVIEW
        ) {
            indexes.push(i);
        }
    }

    const todays: TodaysCards = {
        cards: indexes,
        reviews: [],
        review: false,
    };
    return todays;
}
