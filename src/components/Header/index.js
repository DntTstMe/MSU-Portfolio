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
          <h2>Welcome</h2>
          <p>
            Welcome to Alex's portfolio page built with React. Here, you can find
            a small sample of the projects she has worked on over the course of the program.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
