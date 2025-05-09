import Card from "../components/Card";

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
            {
                id: "4",
                front: "What is a Rust macro?",
                back: "A way to write code that writes other code, enabling metaprogramming",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "5",
                front: "What is a Rust trait?",
                back: "A way to define shared behavior that different types can implement",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "6",
                front: "What are Rust's smart pointers?",
                back: "Data structures that act like pointers but also have additional metadata and capabilities",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "7",
                front: "Explain Rust's concept of 'lifetimes'",
                back: "A way to ensure that references are always valid by tracking how long they are borrowed for",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "8",
                front: "What is Rust's 'cargo'?",
                back: "Rust's build system and package manager",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "9",
                front: "How does Rust handle concurrency?",
                back: "Through fearless concurrency based on ownership and borrowing, preventing data races",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "10",
                front: "What are Rust's enums?",
                back: "A way to define a type that can be one of several different variants",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "11",
                front: "What is the purpose of 'unsafe' Rust?",
                back: "To bypass certain Rust safety checks for performance or to interact with external code",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "12",
                front: "What is the difference between `String` and `&str`?",
                back: "`String` is a growable, mutable, owned string, while `&str` is an immutable view into a string.",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "13",
                front: "What is a closure in Rust?",
                back: "A function-like construct that can capture variables from its surrounding scope.",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "14",
                front: "How do you handle errors in Rust?",
                back: "Using the `Result` type, which represents either success or failure.",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "15",
                front: "What is the purpose of the 'match' keyword in Rust?",
                back: "It is used for pattern matching, allowing you to destructure values and execute different code based on their structure.",
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
            {
                id: "3",
                front: "How do you say 'thank you' in Russian?",
                back: "Спасибо (Spasibo)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "4",
                front: "How do you say 'goodbye' in Russian?",
                back: "До свидания (Do svidaniya)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "5",
                front: "How do you say 'please' in Russian?",
                back: "Пожалуйста (Pozhaluysta)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "6",
                front: "How do you say 'yes' in Russian?",
                back: "Да (Da)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "7",
                front: "How do you say 'no' in Russian?",
                back: "Нет (Nyet)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "8",
                front: "How do you say 'I' in Russian?",
                back: "Я (Ya)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "9",
                front: "How do you say 'you' in Russian?",
                back: "Ты (Ty - informal) / Вы (Vy - formal)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "10",
                front: "How do you say 'we' in Russian?",
                back: "Мы (My)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "11",
                front: "How do you say 'they' in Russian?",
                back: "Они (Oni)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "12",
                front: "How do you say 'good morning' in Russian?",
                back: "Доброе утро (Dobroe utro)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "13",
                front: "How do you say 'good afternoon' in Russian?",
                back: "Добрый день (Dobryy den')",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "14",
                front: "How do you say 'good evening' in Russian?",
                back: "Добрый вечер (Dobryy vecher)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "15",
                front: "How do you say 'good night' in Russian?",
                back: "Спокойной ночи (Spokoynoy nochi)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "16",
                front: "How do you say 'excuse me' in Russian?",
                back: "Извините (Izvinite)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "17",
                front: "How do you say 'I don't understand' in Russian?",
                back: "Я не понимаю (Ya ne ponimayu)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "18",
                front: "How do you say 'Do you speak English?' in Russian?",
                back: "Вы говорите по-английски? (Vy govorite po-angliyski?)",
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
            {
                id: "5",
                front: "What is a class in C++?",
                back: "A user-defined data type that encapsulates data and methods",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "6",
                front: "What is inheritance in C++?",
                back: "A mechanism where a new class inherits properties and behaviors from an existing class",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "7",
                front: "What is polymorphism in C++?",
                back: "The ability of a single interface to represent different underlying forms or types",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "8",
                front: "What are templates in C++?",
                back: "A feature that allows writing generic code that can work with different data types",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "9",
                front: "What are namespaces in C++?",
                back: "A declarative region that provides a scope to the names inside it",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "10",
                front: "What are exceptions in C++?",
                back: "A way to handle runtime errors by transferring control to an exception handler",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "11",
                front: "What are the different types of memory allocation in C++?",
                back: "Static, automatic (stack), and dynamic (heap)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "12",
                front: "What is the Standard Template Library (STL) in C++?",
                back: "A set of template classes and functions to provide common data structures and algorithms",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "13",
                front: "What is the difference between 'struct' and 'class' in C++?",
                back: "By default, members of a 'struct' are public, while members of a 'class' are private",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "14",
                front: "What are friend functions in C++?",
                back: "Functions that can access the private and protected members of a class",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "15",
                front: "Explain the concept of RAII in C++",
                back: "Resource Acquisition Is Initialization - a programming idiom where resources are bound to the lifetime of an object",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "16",
                front: "What are lambda expressions in C++?",
                back: "A concise way to define anonymous function objects",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "17",
                front: "What is operator overloading in C++?",
                back: "Giving extended meaning to existing C++ operators",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "18",
                front: "What are smart pointers in C++ and why are they used?",
                back: "Classes that behave like pointers, but automatically manage memory, preventing memory leaks (e.g., unique_ptr, shared_ptr)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "19",
                front: "What is the purpose of 'static' keyword in C++?",
                back: "Depending on context, it can mean internal linkage, preservation of value between function calls, or a member shared by all instances of a class.",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "20",
                front: "What is the difference between 'new' and 'malloc' in C++?",
                back: "'new' is an operator that allocates memory and calls the constructor, while 'malloc' is a function that only allocates memory.",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "21",
                front: "What is the difference between 'new' and 'malloc' in C++?",
                back: "'new' is an operator that allocates memory and calls the constructor, while 'malloc' is a function that only allocates memory.",
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
            {
                id: "2",
                front: "What are the four pillars of Object-Oriented Programming?",
                back: "Abstraction, Encapsulation, Inheritance, Polymorphism",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "3",
                front: "What is the difference between '==' and '.equals()' in Java?",
                back: "'==' compares references, while '.equals()' compares the content of objects",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "4",
                front: "What is a Java interface?",
                back: "A contract that specifies a set of methods that a class must implement",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "5",
                front: "What is an abstract class in Java?",
                back: "A class that cannot be instantiated and may contain abstract methods (methods without implementation)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "6",
                front: "What is the purpose of the 'final' keyword in Java?",
                back: "It can be used to prevent inheritance of a class, overriding of a method, or modification of a variable",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "7",
                front: "What is the difference between 'String', 'StringBuilder', and 'StringBuffer' in Java?",
                back: "'String' is immutable, 'StringBuilder' is mutable and not thread-safe, and 'StringBuffer' is mutable and thread-safe",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "8",
                front: "What is multithreading in Java?",
                back: "The ability to execute multiple parts of a program concurrently",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "9",
                front: "What are Java Collections?",
                back: "A framework that provides a set of interfaces and classes for storing and manipulating groups of objects",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "10",
                front: "What is the purpose of garbage collection in Java?",
                back: "To automatically reclaim memory occupied by objects that are no longer in use",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "11",
                front: "What are annotations in Java?",
                back: "Metadata that provides information about the code",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "12",
                front: "What are the different types of exceptions in Java?",
                back: "Checked exceptions (must be caught or declared) and unchecked exceptions (runtime exceptions)",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "13",
                front: "What are generics in Java?",
                back: "A way to write code that can work with different types without sacrificing type safety",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "14",
                front: "What is serialization in Java?",
                back: "The process of converting an object into a stream of bytes for storage or transmission",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "15",
                front: "What is a design pattern?",
                back: "A reusable solution to a commonly occurring problem in software design",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "16",
                front: "What is dependency injection?",
                back: "A design pattern in which dependencies are provided to a class instead of the class creating them itself.",
                interval: 1,
                cardState: CardState.NEW,
            },
            {
                id: "17",
                front: "What are lambda expressions in Java?",
                back: "A way to represent anonymous functions.",
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
        if (card.cardState === CardState.NEW && maxNew > cards.new.length) {
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
        if (card.cardState === CardState.NEW) {
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

export function newDeck(deckName: string) {
    if (deckName.trim().length !== 0) {
        decks.push({
            id: String(
                decks.reduce((total, deck) => total + Number(deck.id), 0),
            ),
            name: deckName,
            cards: [],
        } as Deck);
    }
}

export function newCard(deckId: string, cardFront: string, cardBack: string) {
    const deck = decks.find((deck) => deck.id === deckId);
    if (!deck) {
        return;
    }
    if (cardFront.trim().length !== 0 && cardBack.trim().length !== 0) {
        deck.cards.push({
            id: String(
                deck.cards.reduce((total, card) => total + Number(card.id), 0),
            ),
            cardState: CardState.NEW,
            front: cardFront,
            back: cardBack,
            interval: 1,
        } as Card);
    }
}
