import { Link, NavLink } from "react-router-dom";

function NavBar() {
  //dati per generazione voci menù
  const links = [
    { path: "/", label: `HomePage` },
    { path: "/prodotti", label: `Product` },
    { path: "/chisiamo", label: `Abous Us` },
  ];

  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
        {/* <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/prodotti">Product</NavLink>
        </li>
        <li>
          <NavLink to="/chisiamo">Abous Us</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
