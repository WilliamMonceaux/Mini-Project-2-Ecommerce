import { NavLink } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import "./NavBar.css";

function NavBar() {
  const { currentUser } = useUserContext();

  return (
    <nav className="navbar component-box">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {!currentUser?.name && (
          <li>
            <NavLink to="/sign-up">Signup</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export { NavBar };
