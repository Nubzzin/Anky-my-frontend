import { Card, Deck } from "../models/models";
import { v4 as uuidv4 } from "uuid";

const decks: Deck[] = [
    new Deck(uuidv4(), "Rust", [
        new Card(
            uuidv4(),
            "What is Rust's memory management model?",
            "Ownership system with borrowing rules and no garbage collector",
        ),
        new Card(
            uuidv4(),
            "What is the keyword for declaring a variable in Rust?",
            "let",
        ),
        new Card(
            uuidv4(),
            "What does the '?' operator do in Rust?",
            "It's a shorthand for error propagation, returning early if an error occurs",
        ),
        new Card(
            uuidv4(),
            "What is a Rust macro?",
            "A way to write code that writes other code, enabling metaprogramming",
        ),
        new Card(
            uuidv4(),
            "What is a Rust trait?",
            "A way to define shared behavior that different types can implement",
        ),
        new Card(
            uuidv4(),
            "What are Rust's smart pointers?",
            "Data structures that act like pointers but also have additional metadata and capabilities",
        ),
        new Card(
            uuidv4(),
            "Explain Rust's concept of 'lifetimes'",
            "A way to ensure that references are always valid by tracking how long they are borrowed for",
        ),
        new Card(
            uuidv4(),
            "What is Rust's 'cargo'?",
            "Rust's build system and package manager",
        ),
        new Card(
            uuidv4(),
            "How does Rust handle concurrency?",
            "Through fearless concurrency based on ownership and borrowing, preventing data races",
        ),
        new Card(
            uuidv4(),
            "What are Rust's enums?",
            "A way to define a type that can be one of several different variants",
        ),
        new Card(
            uuidv4(),
            "What is the purpose of 'unsafe' Rust?",
            "To bypass certain Rust safety checks for performance or to interact with external code",
        ),
        new Card(
            uuidv4(),
            "What is the difference between `String` and `&str`?",
            "`String` is a growable, mutable, owned string, while `&str` is an immutable view into a string.",
        ),
        new Card(
            uuidv4(),
            "What is a closure in Rust?",
            "A function-like construct that can capture variables from its surrounding scope.",
        ),
        new Card(
            uuidv4(),
            "How do you handle errors in Rust?",
            "Using the `Result` type, which represents either success or failure.",
        ),
        new Card(
            uuidv4(),
            "What is the purpose of the 'match' keyword in Rust?",
            "It is used for pattern matching, allowing you to destructure values and execute different code based on their structure.",
        ),
    ]),
    new Deck(uuidv4(), "Russian", [
        new Card(
            uuidv4(),
            "How do you say 'hello' in Russian?",
            "Привет (Privet)",
        ),
        new Card(uuidv4(), "What is the capital of Russia?", "Moscow (Москва)"),
        new Card(
            uuidv4(),
            "How do you say 'thank you' in Russian?",
            "Спасибо (Spasibo)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'goodbye' in Russian?",
            "До свидания (Do svidaniya)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'please' in Russian?",
            "Пожалуйста (Pozhaluysta)",
        ),
        new Card(uuidv4(), "How do you say 'yes' in Russian?", "Да (Da)"),
        new Card(uuidv4(), "How do you say 'no' in Russian?", "Нет (Nyet)"),
        new Card(uuidv4(), "How do you say 'I' in Russian?", "Я (Ya)"),
        new Card(
            uuidv4(),
            "How do you say 'you' in Russian?",
            "Ты (Ty - informal) / Вы (Vy - formal)",
        ),
        new Card(uuidv4(), "How do you say 'we' in Russian?", "Мы (My)"),
        new Card(uuidv4(), "How do you say 'they' in Russian?", "Они (Oni)"),
        new Card(
            uuidv4(),
            "How do you say 'good morning' in Russian?",
            "Доброе утро (Dobroe utro)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'good afternoon' in Russian?",
            "Добрый день (Dobryy den')",
        ),
        new Card(
            uuidv4(),
            "How do you say 'good evening' in Russian?",
            "Добрый вечер (Dobryy vecher)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'good night' in Russian?",
            "Спокойной ночи (Spokoynoy nochi)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'excuse me' in Russian?",
            "Извините (Izvinite)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'I don't understand' in Russian?",
            "Я не понимаю (Ya ne ponimayu)",
        ),
        new Card(
            uuidv4(),
            "How do you say 'Do you speak English?' in Russian?",
            "Вы говорите по-английски? (Vy govorite po-angliyski?)",
        ),
    ]),
    new Deck(uuidv4(), "C++", [
        new Card(
            uuidv4(),
            "What is a pointer in C++?",
            "A variable that stores the memory address of another variable",
        ),
        new Card(
            uuidv4(),
            "What is the difference between stack and heap memory in C++?",
            "Stack is used for static memory allocation and heap for dynamic memory allocation",
        ),
        new Card(
            uuidv4(),
            "What is a virtual function in C++?",
            "A function that can be overridden in derived classes, enabling polymorphism",
        ),
        new Card(
            uuidv4(),
            "What does 'const' keyword mean for a method in C++?",
            "It indicates the method won't modify any member variables of the class",
        ),
        new Card(
            uuidv4(),
            "What is a class in C++?",
            "A user-defined data type that encapsulates data and methods",
        ),
        new Card(
            uuidv4(),
            "What is inheritance in C++?",
            "A mechanism where a new class inherits properties and behaviors from an existing class",
        ),
        new Card(
            uuidv4(),
            "What is polymorphism in C++?",
            "The ability of a single interface to represent different underlying forms or types",
        ),
        new Card(
            uuidv4(),
            "What are templates in C++?",
            "A feature that allows writing generic code that can work with different data types",
        ),
        new Card(
            uuidv4(),
            "What are namespaces in C++?",
            "A declarative region that provides a scope to the names inside it",
        ),
        new Card(
            uuidv4(),
            "What are exceptions in C++?",
            "A way to handle runtime errors by transferring control to an exception handler",
        ),
        new Card(
            uuidv4(),
            "What are the different types of memory allocation in C++?",
            "Static, automatic (stack), and dynamic (heap)",
        ),
        new Card(
            uuidv4(),
            "What is the Standard Template Library (STL) in C++?",
            "A set of template classes and functions to provide common data structures and algorithms",
        ),
        new Card(
            uuidv4(),
            "What is the difference between 'struct' and 'class' in C++?",
            "By default, members of a 'struct' are public, while members of a 'class' are private",
        ),
        new Card(
            uuidv4(),
            "What are friend functions in C++?",
            "Functions that can access the private and protected members of a class",
        ),
        new Card(
            uuidv4(),
            "Explain the concept of RAII in C++",
            "Resource Acquisition Is Initialization - a programming idiom where resources are bound to the lifetime of an object",
        ),
        new Card(
            uuidv4(),
            "What are lambda expressions in C++?",
            "A concise way to define anonymous function objects",
        ),
        new Card(
            uuidv4(),
            "What is operator overloading in C++?",
            "Giving extended meaning to existing C++ operators",
        ),
        new Card(
            uuidv4(),
            "What are smart pointers in C++ and why are they used?",
            "Classes that behave like pointers, but automatically manage memory, preventing memory leaks (e.g., unique_ptr, shared_ptr)",
        ),
        new Card(
            uuidv4(),
            "What is the purpose of 'static' keyword in C++?",
            "Depending on context, it can mean internal linkage, preservation of value between function calls, or a member shared by all instances of a class.",
        ),
        new Card(
            uuidv4(),
            "What is the difference between 'new' and 'malloc' in C++?",
            "'new' is an operator that allocates memory and calls the constructor, while 'malloc' is a function that only allocates memory.",
        ),
        new Card(
            uuidv4(),
            "What is the difference between 'new' and 'malloc' in C++?",
            "'new' is an operator that allocates memory and calls the constructor, while 'malloc' is a function that only allocates memory.",
        ),
    ]),
    new Deck(uuidv4(), "Java", [
        new Card(
            uuidv4(),
            "What is the difference between JDK, JRE, and JVM?",
            "JDK (Java Development Kit) includes development tools, JRE (Java Runtime Environment) is needed to run Java applications, and JVM (Java Virtual Machine) executes Java bytecode",
        ),
        new Card(
            uuidv4(),
            "What are the four pillars of Object-Oriented Programming?",
            "Abstraction, Encapsulation, Inheritance, Polymorphism",
        ),
        new Card(
            uuidv4(),
            "What is the difference between '==' and '.equals()' in Java?",
            "'==' compares references, while '.equals()' compares the content of objects",
        ),
        new Card(
            uuidv4(),
            "What is a Java interface?",
            "A contract that specifies a set of methods that a class must implement",
        ),
        new Card(
            uuidv4(),
            "What is an abstract class in Java?",
            "A class that cannot be instantiated and may contain abstract methods (methods without implementation)",
        ),
        new Card(
            uuidv4(),
            "What is the purpose of the 'final' keyword in Java?",
            "It can be used to prevent inheritance of a class, overriding of a method, or modification of a variable",
        ),
        new Card(
            uuidv4(),
            "What is the difference between 'String', 'StringBuilder', and 'StringBuffer' in Java?",
            "'String' is immutable, 'StringBuilder' is mutable and not thread-safe, and 'StringBuffer' is mutable and thread-safe",
        ),
        new Card(
            uuidv4(),
            "What is multithreading in Java?",
            "The ability to execute multiple parts of a program concurrently",
        ),
        new Card(
            uuidv4(),
            "What are Java Collections?",
            "A framework that provides a set of interfaces and classes for storing and manipulating groups of objects",
        ),
        new Card(
            uuidv4(),
            "What is the purpose of garbage collection in Java?",
            "To automatically reclaim memory occupied by objects that are no longer in use",
        ),
        new Card(
            uuidv4(),
            "What are annotations in Java?",
            "Metadata that provides information about the code",
        ),
        new Card(
            uuidv4(),
            "What are the different types of exceptions in Java?",
            "Checked exceptions (must be caught or declared) and unchecked exceptions (runtime exceptions)",
        ),
        new Card(
            uuidv4(),
            "What are generics in Java?",
            "A way to write code that can work with different types without sacrificing type safety",
        ),
        new Card(
            uuidv4(),
            "What is serialization in Java?",
            "The process of converting an object into a stream of bytes for storage or transmission",
        ),
        new Card(
            uuidv4(),
            "What is a design pattern?",
            "A reusable solution to a commonly occurring problem in software design",
        ),
        new Card(
            uuidv4(),
            "What is dependency injection?",
            "A design pattern in which dependencies are provided to a class instead of the class creating them itself.",
        ),
        new Card(
            uuidv4(),
            "What are lambda expressions in Java?",
            "A way to represent anonymous functions.",
        ),
    ]),
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
    return new Deck("", "", []);
}

export async function totalCards(): Promise<number> {
    return decks.reduce((total, deck) => total + deck.cards.length, 0);
}

export function updateDeck(cardsToday: Card[], id: string): void {
    const deck = decks.find((deck) => deck.id === id);
    if (!deck) {
        return;
    }
    deck.cards.forEach((cardDeck) => {
        const card = cardsToday.find((cardToday) => {
            if (cardDeck.id === cardToday.id) {
                return cardToday;
            }
        });
        return card;
    });
}

export function newDeck(deckName: string) {
    if (deckName.trim().length !== 0) {
        decks.push(
            new Deck(
                String(
                    decks.reduce((total, deck) => total + Number(deck.id), 0),
                ),
                deckName,
                [],
            ),
        );
    }
}

export function newCard(deckId: string, cardFront: string, cardBack: string) {
    const deck = decks.find((deck) => deck.id === deckId);
    if (!deck) {
        return;
    }
    if (cardFront.trim().length !== 0 && cardBack.trim().length !== 0) {
        deck.cards.push(
            new Card(
                String(
                    deck.cards.reduce(
                        (total, card) => total + Number(card.id),
                        0,
                    ),
                ),
                cardFront,
                cardBack,
                1,
            ),
        );
    }
}
