import { useGlobalStateContext } from 'context/GlobalStateContext';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export function Header() {
  const { currentPath } = useGlobalStateContext();
  console.log('sd' + currentPath); //!!! Header renders ones

  return (
    <header className="header">
      <nav className="header-nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/">
              Main page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/form">
              Form
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={'nav__link link'} to="/about_us">
              About us
            </NavLink>
          </li>
          {currentPath ? (
            <li className="nav__item">
              <NavLink className={'nav__link link'} to="/card_info">
                {currentPath}
              </NavLink>
            </li>
          ) : (
            <h1>No</h1>
          )}
        </ul>
      </nav>
    </header>
  );
}
