import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("About");

  // Render the appropriate tab content
  const renderTab = () => {
    switch (currentTab) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Alex's Portfolio | {currentTab} </title>
      </Helmet>
      {/* Header component */}
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      {/* Main content */}
      <main>{renderTab()}</main>
      {/* Footer component */}
      <Footer></Footer>
    </>
  );
}

export default App;
