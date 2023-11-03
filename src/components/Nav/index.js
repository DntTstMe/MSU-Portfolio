import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentTab, handleTabChange }) {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' }
  ];

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        {navLinks.map((link, index) => (
          <li className="nav-item" key={index}>
            <a
              href={link.href}
              onClick={() => handleTabChange(link.name)}
              className={
                currentTab === link.name ? 'nav-link active' : 'nav-link'
              }
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

