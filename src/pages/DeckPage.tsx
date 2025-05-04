import { useParams } from "react-router-dom";
import { getDeck } from "../services/api";

export default function DeckPage() {
    const { id } = useParams();
    const deck = getDeck(Number(id));

    return (
        <div>
            <h1>
                Deck: {deck.name} with id: {id}
            </h1>
        </div>
    );
}
