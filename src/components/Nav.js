import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <nav>
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogs.map(name => (
        <NavLink key={name} to={`/dogs/${name.toLowerCase()}`}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;