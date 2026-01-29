import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <NavLink to="/prodotti">Product</NavLink>
        </li>
        <li>
          <NavLink to="/chisiamo">Abous Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
