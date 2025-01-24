import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="container">
        <h2>Min Nettside</h2>
        <ul>
          <li>
            <Link to="/">Hovedside</Link>
          </li>
          <li>
            <Link to="/om-oss">Om Oss</Link>
          </li>
          <li>
            <Link to="/kontakt-oss">Kontakt Oss</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
