import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Main page</NavLink>
          </li>
          <li>
            <NavLink to="/about_us">About us</NavLink>
          </li>
          <li>
            <NavLink to="/secret_page">Secret page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
