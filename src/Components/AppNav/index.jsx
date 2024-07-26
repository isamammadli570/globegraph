import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="mt-3 mb-2">
      <Link to="/">
        <img className="w-28" src=".././logo.png" alt="" />
      </Link>

      <ul className="list-none flex rounded text-white border ">
        <li className="p-1">
          <NavLink to="cities">Cities</NavLink>
        </li>
        <p className="p-1">/</p>
        <li className="p-1">
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
