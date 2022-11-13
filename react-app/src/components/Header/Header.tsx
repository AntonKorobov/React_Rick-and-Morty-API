import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export function Header(props: { currentPage?: string } = { currentPage: '' }) {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink end className="nav__link link" to="/">
              Main page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link link" to="/form">
              Form
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link link" to="/about_us">
              About us
            </NavLink>
          </li>
          {props.currentPage && (
            <li className="nav__item">
              <NavLink className="nav__link link active" to={''}>
                {props.currentPage}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
