import React from "react";
import "../../styles/Header.scss";
import { Link } from "react-router-dom";

export const Header: React.FC<any> = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Boom Boom Flix</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watch-later"><i className="fa fa-clock" aria-hidden="true"></i> watch later</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
