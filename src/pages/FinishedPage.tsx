import { Link } from "react-router-dom";
export default function FinishedPage() {
    return (
        <>
            <div className="mb-4">
                <h3>Finished</h3>
                <h4>Nothing to see here!</h4>
            </div>
            <div>
                <Link to="/" className="btn btn-outline-light">
                    Return
                </Link>
            </div>
        </>
    );
}
