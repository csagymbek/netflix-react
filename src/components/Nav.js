import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      {/* logo  */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
        className="nav__avatar"
      />
      {/* user avatar  */}
    </div>
  );
}
