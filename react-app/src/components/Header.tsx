import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/">
              Home page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/main_page">
              Main page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/forms">
              Forms
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/about_us">
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
