import React from "react";
import { NavbarStyle, Container } from "./styles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarStyle>
      <Container>
        <ul>
          <li>
            <Link>
              <h2 to='/'>ExcerTracker</h2>
            </Link>
          </li>
          <li>
            <Link to='/'>Exercises</Link>
          </li>
          <li>
            <Link to="/create">Create Exercise Log</Link>
          </li>
          <li>
            <Link to="/user">Create User</Link>
          </li>
        </ul>
      </Container>
    </NavbarStyle>
  );
}

export default Navbar;
