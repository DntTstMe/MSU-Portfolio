import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentTab, handleTabChange }) {
  // Create a mapping of tab names and their corresponding labels
  const tabs = [
    { name: 'About', label: 'About' },
    { name: 'Portfolio', label: 'Portfolio' },
    { name: 'Contact', label: 'Contact' },
    { name: 'Resume', label: 'Resume' },
  ];

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.name}>
            <a
              href={`#${tab.name.toLowerCase()}`}
              onClick={() => handleTabChange(tab.name)}
              className={currentTab === tab.name ? 'nav-link active' : 'nav-link'}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
