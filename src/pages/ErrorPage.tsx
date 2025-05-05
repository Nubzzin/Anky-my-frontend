export default function ErrorPage() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center error-container text-center">
            <h1 className="display-3 mb-3">Oops!</h1>
            <p className="lead mb-4">
                Something went wrong. We're working to fix it.
            </p>
            <a href="/" className="btn btn-outline-light">
                Go Home
            </a>
        </div>
    );
}
