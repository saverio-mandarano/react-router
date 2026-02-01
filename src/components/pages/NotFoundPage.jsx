import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h2>404</h2>
      <p>la pagina cercata non esiste...</p>
      <Link to="/" className="btn btn-primary m-5">
        Torna alla home
      </Link>
    </>
  );
}

export default NotFoundPage;
