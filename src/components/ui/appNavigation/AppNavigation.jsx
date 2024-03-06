import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./AppNavigation.css";
import { useLocation, Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

function AppNavigation(props) {
  const { contacts } = useContext(UserContext);
  let location = useLocation();
  return (
    <nav className="app-navigation">
      <Link
        to="/"
        className={
          location.pathname !== "/contacts/new/" ? "link active" : "link"
        }
      >
        {`Contacts (${contacts.length})`}
      </Link>
      <Link
        to="/contacts/new/"
        className={
          location.pathname === "/contacts/new/" ? "link active" : "link"
        }
      >
        New Contact
      </Link>
    </nav>
  );
}

AppNavigation.propTypes = {};

export default AppNavigation;
