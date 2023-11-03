import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Alex Tester©</h2>
      <p>
        <ul>
          <a href="https://github.com/DntTstMe">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="www.linkedin.com/in/alexis-tester-15619b273/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/beaautifully_chaotic/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
