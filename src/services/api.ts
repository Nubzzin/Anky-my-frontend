export interface Card {
    id: number;
    front: string;
    back: string;
    struggle: number;
    days: number;
    seenToday: boolean;
}

export interface Deck {
    id: number;
    name: string;
    cards: Card[];
    dueToday: number;
    size: number;
}

const decks: Deck[] = [
    {
        id: 1,
        name: "Rust",
        cards: [
            {
                id: 1,
                front: "What is Rust's memory management model?",
                back: "Ownership system with borrowing rules and no garbage collector",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
            {
                id: 2,
                front: "What is the keyword for declaring a variable in Rust?",
                back: "let",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
            {
                id: 3,
                front: "What does the '?' operator do in Rust?",
                back: "It's a shorthand for error propagation, returning early if an error occurs",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
        ],
        dueToday: 3,
        size: 3,
    },
    {
        id: 2,
        name: "Russo",
        cards: [
            {
                id: 1,
                front: "How do you say 'hello' in Russian?",
                back: "Привет (Privet)",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
            {
                id: 2,
                front: "What is the capital of Russia?",
                back: "Moscow (Москва)",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
        ],
        dueToday: 1,
        size: 2,
    },
    {
        id: 3,
        name: "C++",
        cards: [
            {
                id: 1,
                front: "What is a pointer in C++?",
                back: "A variable that stores the memory address of another variable",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
            {
                id: 2,
                front: "What is the difference between stack and heap memory in C++?",
                back: "Stack is used for static memory allocation and heap for dynamic memory allocation",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
            {
                id: 3,
                front: "What is a virtual function in C++?",
                back: "A function that can be overridden in derived classes, enabling polymorphism",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
            {
                id: 4,
                front: "What does 'const' keyword mean for a method in C++?",
                back: "It indicates the method won't modify any member variables of the class",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
        ],
        dueToday: 3,
        size: 4,
    },
    {
        id: 4,
        name: "Java",
        cards: [
            {
                id: 1,
                front: "What is the difference between JDK, JRE, and JVM?",
                back: "JDK (Java Development Kit) includes development tools, JRE (Java Runtime Environment) is needed to run Java applications, and JVM (Java Virtual Machine) executes Java bytecode",
                struggle: 0,
                days: 0,
                seenToday: false,
            },
        ],
        dueToday: 1,
        size: 1,
    },
];

export function getDecks() {
    return decks;
}

export function getDeck(id: number) {
    return decks.find((deck) => deck.id === id);
}

export function totalCards() {
    return decks.reduce((total, deck) => total + deck.cards.length, 0);
}
