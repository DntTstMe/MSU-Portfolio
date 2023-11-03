import React from "react";
import Nav from "../Nav";

function Header({ currentTab, handleTabChange }) {
  return (
    <header>
      <nav>
        <h1>Alex's Portfolio</h1>
        <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
      </nav>
      <section className="hero">
        <div className="hero-cta">
          <h2>Howdy!</h2>
          <p>
          Welcome to my page! Feel free to explore and check out my projects.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
