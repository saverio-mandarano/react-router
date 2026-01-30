// import NavBar from "../NavBar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <h2>Benvenuto nella HomePage</h2>
      <Link to="/prodotti" className="btn btn-primary">
        Vai a lista prodotti
      </Link>
    </>
  );
}

export default HomePage;
